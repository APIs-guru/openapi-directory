import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntitlementValue } from "./entitlementvalue";


// Entitlement
/** 
 * An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.
**/
export class Entitlement extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomerIdentifier" })
  customerIdentifier?: string;

  @Metadata({ data: "json, name=Dimension" })
  dimension?: string;

  @Metadata({ data: "json, name=ExpirationDate" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=ProductCode" })
  productCode?: string;

  @Metadata({ data: "json, name=Value" })
  value?: EntitlementValue;
}

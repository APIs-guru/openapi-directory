import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntitlementValue } from "./entitlementvalue";



// Entitlement
/** 
 * An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.
**/
export class Entitlement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomerIdentifier" })
  customerIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=Dimension" })
  dimension?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ProductCode" })
  productCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: EntitlementValue;
}

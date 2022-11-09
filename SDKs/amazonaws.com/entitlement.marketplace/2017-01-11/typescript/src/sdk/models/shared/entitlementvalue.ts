import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EntitlementValue
/** 
 * The EntitlementValue represents the amount of capacity that the customer is entitled to for the product.
**/
export class EntitlementValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=BooleanValue" })
  booleanValue?: boolean;

  @Metadata({ data: "json, name=DoubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=IntegerValue" })
  integerValue?: number;

  @Metadata({ data: "json, name=StringValue" })
  stringValue?: string;
}

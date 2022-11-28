import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EntitlementValue
/** 
 * The EntitlementValue represents the amount of capacity that the customer is entitled to for the product.
**/
export class EntitlementValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BooleanValue" })
  booleanValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DoubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=IntegerValue" })
  integerValue?: number;

  @SpeakeasyMetadata({ data: "json, name=StringValue" })
  stringValue?: string;
}

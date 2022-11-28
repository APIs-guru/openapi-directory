import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeKey } from "./attributekey";
import { TypedAttributeValueRange } from "./typedattributevaluerange";



// ObjectAttributeRange
/** 
 * A range of attributes.
**/
export class ObjectAttributeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeKey" })
  attributeKey?: AttributeKey;

  @SpeakeasyMetadata({ data: "json, name=Range" })
  range?: TypedAttributeValueRange;
}

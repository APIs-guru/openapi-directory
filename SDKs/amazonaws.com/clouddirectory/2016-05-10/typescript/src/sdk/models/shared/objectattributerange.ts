import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttributeKey } from "./attributekey";
import { TypedAttributeValueRange } from "./typedattributevaluerange";


// ObjectAttributeRange
/** 
 * A range of attributes.
**/
export class ObjectAttributeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeKey" })
  attributeKey?: AttributeKey;

  @Metadata({ data: "json, name=Range" })
  range?: TypedAttributeValueRange;
}

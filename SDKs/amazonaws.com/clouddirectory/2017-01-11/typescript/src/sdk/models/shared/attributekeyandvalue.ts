import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttributeKey } from "./attributekey";
import { TypedAttributeValue } from "./typedattributevalue";


// AttributeKeyAndValue
/** 
 * The combination of an attribute key and an attribute value.
**/
export class AttributeKeyAndValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: AttributeKey;

  @Metadata({ data: "json, name=Value" })
  value: TypedAttributeValue;
}

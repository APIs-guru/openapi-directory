import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeKey } from "./attributekey";
import { TypedAttributeValue } from "./typedattributevalue";



// AttributeKeyAndValue
/** 
 * The combination of an attribute key and an attribute value.
**/
export class AttributeKeyAndValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: AttributeKey;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: TypedAttributeValue;
}

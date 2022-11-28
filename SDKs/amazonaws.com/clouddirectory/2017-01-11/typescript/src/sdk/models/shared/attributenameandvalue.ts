import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypedAttributeValue } from "./typedattributevalue";



// AttributeNameAndValue
/** 
 * Identifies the attribute name and value for a typed link.
**/
export class AttributeNameAndValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeName" })
  attributeName: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: TypedAttributeValue;
}

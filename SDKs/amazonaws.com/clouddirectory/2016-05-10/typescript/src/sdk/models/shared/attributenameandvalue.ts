import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TypedAttributeValue } from "./typedattributevalue";


// AttributeNameAndValue
/** 
 * Identifies the attribute name and value for a typed link.
**/
export class AttributeNameAndValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeName" })
  attributeName: string;

  @Metadata({ data: "json, name=Value" })
  value: TypedAttributeValue;
}

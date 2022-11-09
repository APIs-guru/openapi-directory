import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttributeValue } from "./attributevalue";


// ExpectedAttributeValue
/** 
 * Allows you to provide an attribute name, and whether or not Amazon DynamoDB should check to see if the attribute value already exists; or if the attribute value exists and has a particular value before changing it.
**/
export class ExpectedAttributeValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=Exists" })
  exists?: boolean;

  @Metadata({ data: "json, name=Value" })
  value?: AttributeValue;
}

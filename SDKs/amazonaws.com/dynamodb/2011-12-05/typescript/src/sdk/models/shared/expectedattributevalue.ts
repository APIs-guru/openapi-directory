import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



// ExpectedAttributeValue
/** 
 * Allows you to provide an attribute name, and whether or not Amazon DynamoDB should check to see if the attribute value already exists; or if the attribute value exists and has a particular value before changing it.
**/
export class ExpectedAttributeValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Exists" })
  exists?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: AttributeValue;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



// PutRequest
/** 
 * A container for a Put BatchWrite request
**/
export class PutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Item", elemType: AttributeValue })
  item: Map<string, AttributeValue>;
}

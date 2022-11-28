import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



// ItemResponse
/** 
 * Details for the requested item.
**/
export class ItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Item", elemType: AttributeValue })
  item?: Map<string, AttributeValue>;
}

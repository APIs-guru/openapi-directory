import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";


// ItemResponse
/** 
 * Details for the requested item.
**/
export class ItemResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Item", elemType: shared.AttributeValue })
  item?: Map<string, AttributeValue>;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinkAttributeAction } from "./linkattributeaction";
import { AttributeKey } from "./attributekey";



// LinkAttributeUpdate
/** 
 * Structure that contains attribute update information.
**/
export class LinkAttributeUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeAction" })
  attributeAction?: LinkAttributeAction;

  @SpeakeasyMetadata({ data: "json, name=AttributeKey" })
  attributeKey?: AttributeKey;
}

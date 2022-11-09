import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LinkAttributeAction } from "./linkattributeaction";
import { AttributeKey } from "./attributekey";


// LinkAttributeUpdate
/** 
 * Structure that contains attribute update information.
**/
export class LinkAttributeUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeAction" })
  attributeAction?: LinkAttributeAction;

  @Metadata({ data: "json, name=AttributeKey" })
  attributeKey?: AttributeKey;
}

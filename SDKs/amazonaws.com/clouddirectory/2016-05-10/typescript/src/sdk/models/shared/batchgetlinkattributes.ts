import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypedLinkSpecifier } from "./typedlinkspecifier";



// BatchGetLinkAttributes
/** 
 * Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchGetLinkAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeNames" })
  attributeNames: string[];

  @SpeakeasyMetadata({ data: "json, name=TypedLinkSpecifier" })
  typedLinkSpecifier: TypedLinkSpecifier;
}

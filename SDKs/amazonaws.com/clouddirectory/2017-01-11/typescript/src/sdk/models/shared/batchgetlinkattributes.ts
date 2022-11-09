import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TypedLinkSpecifier } from "./typedlinkspecifier";


// BatchGetLinkAttributes
/** 
 * Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchGetLinkAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeNames" })
  attributeNames: string[];

  @Metadata({ data: "json, name=TypedLinkSpecifier" })
  typedLinkSpecifier: TypedLinkSpecifier;
}

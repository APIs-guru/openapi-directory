import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TypedLinkSpecifier } from "./typedlinkspecifier";


// BatchDetachTypedLink
/** 
 * Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchDetachTypedLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=TypedLinkSpecifier" })
  typedLinkSpecifier: TypedLinkSpecifier;
}

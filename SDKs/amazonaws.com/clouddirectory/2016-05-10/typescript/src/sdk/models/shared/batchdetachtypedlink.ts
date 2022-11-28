import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypedLinkSpecifier } from "./typedlinkspecifier";



// BatchDetachTypedLink
/** 
 * Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchDetachTypedLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TypedLinkSpecifier" })
  typedLinkSpecifier: TypedLinkSpecifier;
}

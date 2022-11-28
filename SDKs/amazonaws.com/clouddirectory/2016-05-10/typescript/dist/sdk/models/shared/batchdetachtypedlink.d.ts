import { SpeakeasyBase } from "../../../internal/utils";
import { TypedLinkSpecifier } from "./typedlinkspecifier";
/**
 * Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>.
**/
export declare class BatchDetachTypedLink extends SpeakeasyBase {
    typedLinkSpecifier: TypedLinkSpecifier;
}

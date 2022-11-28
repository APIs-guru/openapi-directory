import { SpeakeasyBase } from "../../../internal/utils";
import { TypedLinkSpecifier } from "./typedlinkspecifier";
/**
 * Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.
**/
export declare class BatchGetLinkAttributes extends SpeakeasyBase {
    attributeNames: string[];
    typedLinkSpecifier: TypedLinkSpecifier;
}

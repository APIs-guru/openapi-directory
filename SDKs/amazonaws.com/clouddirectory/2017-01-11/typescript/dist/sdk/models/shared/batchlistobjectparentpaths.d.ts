import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
/**
 * Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectParentPaths</a> and <a>BatchReadRequest$Operations</a>.
**/
export declare class BatchListObjectParentPaths extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    objectReference: ObjectReference;
}

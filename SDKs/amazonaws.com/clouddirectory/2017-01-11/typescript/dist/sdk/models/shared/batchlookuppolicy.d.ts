import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
/**
 * Lists all policies from the root of the Directory to the object specified inside a <a>BatchRead</a> operation. For more information, see <a>LookupPolicy</a> and <a>BatchReadRequest$Operations</a>.
**/
export declare class BatchLookupPolicy extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    objectReference: ObjectReference;
}

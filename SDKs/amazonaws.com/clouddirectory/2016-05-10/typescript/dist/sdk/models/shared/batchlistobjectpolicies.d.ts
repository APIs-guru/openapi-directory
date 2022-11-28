import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
/**
 * Returns policies attached to an object in pagination fashion inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectPolicies</a> and <a>BatchReadRequest$Operations</a>.
**/
export declare class BatchListObjectPolicies extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    objectReference: ObjectReference;
}

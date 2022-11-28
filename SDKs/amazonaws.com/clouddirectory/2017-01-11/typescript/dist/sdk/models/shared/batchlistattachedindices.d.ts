import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
/**
 * Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>.
**/
export declare class BatchListAttachedIndices extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    targetReference: ObjectReference;
}

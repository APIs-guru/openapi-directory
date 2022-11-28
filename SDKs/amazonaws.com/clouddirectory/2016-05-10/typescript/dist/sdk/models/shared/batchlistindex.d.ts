import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
import { ObjectAttributeRange } from "./objectattributerange";
/**
 * Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>.
**/
export declare class BatchListIndex extends SpeakeasyBase {
    indexReference: ObjectReference;
    maxResults?: number;
    nextToken?: string;
    rangesOnIndexedValues?: ObjectAttributeRange[];
}

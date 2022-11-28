import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
/**
 * Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>.
**/
export declare class BatchDetachFromIndex extends SpeakeasyBase {
    indexReference: ObjectReference;
    targetReference: ObjectReference;
}

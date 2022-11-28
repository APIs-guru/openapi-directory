import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
/**
 * Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>.
**/
export declare class BatchAttachToIndex extends SpeakeasyBase {
    indexReference: ObjectReference;
    targetReference: ObjectReference;
}

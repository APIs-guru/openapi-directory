import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
/**
 * Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>.
**/
export declare class BatchAttachPolicy extends SpeakeasyBase {
    objectReference: ObjectReference;
    policyReference: ObjectReference;
}

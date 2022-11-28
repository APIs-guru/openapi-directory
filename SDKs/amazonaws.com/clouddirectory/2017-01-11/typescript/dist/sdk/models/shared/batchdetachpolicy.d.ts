import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
/**
 * Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>.
**/
export declare class BatchDetachPolicy extends SpeakeasyBase {
    objectReference: ObjectReference;
    policyReference: ObjectReference;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
/**
 * Represents the output of an <a>AttachObject</a> operation.
**/
export declare class BatchAttachObject extends SpeakeasyBase {
    childReference: ObjectReference;
    linkName: string;
    parentReference: ObjectReference;
}

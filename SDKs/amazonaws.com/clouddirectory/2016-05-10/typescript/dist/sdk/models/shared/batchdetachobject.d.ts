import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
/**
 * Represents the output of a <a>DetachObject</a> operation.
**/
export declare class BatchDetachObject extends SpeakeasyBase {
    batchReferenceName?: string;
    linkName: string;
    parentReference: ObjectReference;
}

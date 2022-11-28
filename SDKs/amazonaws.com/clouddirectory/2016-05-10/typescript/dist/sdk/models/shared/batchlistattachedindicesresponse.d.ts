import { SpeakeasyBase } from "../../../internal/utils";
import { IndexAttachment } from "./indexattachment";
/**
 * Represents the output of a <a>ListAttachedIndices</a> response operation.
**/
export declare class BatchListAttachedIndicesResponse extends SpeakeasyBase {
    indexAttachments?: IndexAttachment[];
    nextToken?: string;
}

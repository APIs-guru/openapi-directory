import { SpeakeasyBase } from "../../../internal/utils";
import { IndexAttachment } from "./indexattachment";
/**
 * Represents the output of a <a>ListIndex</a> response operation.
**/
export declare class BatchListIndexResponse extends SpeakeasyBase {
    indexAttachments?: IndexAttachment[];
    nextToken?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ConflictMetadata } from "./conflictmetadata";
import { MergeHunk } from "./mergehunk";
/**
 * Information about conflicts in a merge operation.
**/
export declare class Conflict extends SpeakeasyBase {
    conflictMetadata?: ConflictMetadata;
    mergeHunks?: MergeHunk[];
}

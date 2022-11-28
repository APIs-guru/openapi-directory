import { SpeakeasyBase } from "../../../internal/utils";
import { ConflictMetadata } from "./conflictmetadata";
import { MergeHunk } from "./mergehunk";
export declare class DescribeMergeConflictsOutput extends SpeakeasyBase {
    baseCommitId?: string;
    conflictMetadata: ConflictMetadata;
    destinationCommitId: string;
    mergeHunks: MergeHunk[];
    nextToken?: string;
    sourceCommitId: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ConflictMetadata } from "./conflictmetadata";
export declare class GetMergeConflictsOutput extends SpeakeasyBase {
    baseCommitId?: string;
    conflictMetadataList: ConflictMetadata[];
    destinationCommitId: string;
    mergeable: boolean;
    nextToken?: string;
    sourceCommitId: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Conflict } from "./conflict";
import { BatchDescribeMergeConflictsError } from "./batchdescribemergeconflictserror";
export declare class BatchDescribeMergeConflictsOutput extends SpeakeasyBase {
    baseCommitId?: string;
    conflicts: Conflict[];
    destinationCommitId: string;
    errors?: BatchDescribeMergeConflictsError[];
    nextToken?: string;
    sourceCommitId: string;
}

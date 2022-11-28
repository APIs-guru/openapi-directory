import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Conflict } from "./conflict";
import { BatchDescribeMergeConflictsError } from "./batchdescribemergeconflictserror";



export class BatchDescribeMergeConflictsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseCommitId" })
  baseCommitId?: string;

  @SpeakeasyMetadata({ data: "json, name=conflicts", elemType: Conflict })
  conflicts: Conflict[];

  @SpeakeasyMetadata({ data: "json, name=destinationCommitId" })
  destinationCommitId: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: BatchDescribeMergeConflictsError })
  errors?: BatchDescribeMergeConflictsError[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceCommitId" })
  sourceCommitId: string;
}

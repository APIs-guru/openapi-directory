import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Conflict } from "./conflict";
import { BatchDescribeMergeConflictsError } from "./batchdescribemergeconflictserror";


export class BatchDescribeMergeConflictsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseCommitId" })
  baseCommitId?: string;

  @Metadata({ data: "json, name=conflicts", elemType: shared.Conflict })
  conflicts: Conflict[];

  @Metadata({ data: "json, name=destinationCommitId" })
  destinationCommitId: string;

  @Metadata({ data: "json, name=errors", elemType: shared.BatchDescribeMergeConflictsError })
  errors?: BatchDescribeMergeConflictsError[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=sourceCommitId" })
  sourceCommitId: string;
}

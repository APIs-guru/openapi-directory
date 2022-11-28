import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConflictMetadata } from "./conflictmetadata";
import { MergeHunk } from "./mergehunk";



export class DescribeMergeConflictsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseCommitId" })
  baseCommitId?: string;

  @SpeakeasyMetadata({ data: "json, name=conflictMetadata" })
  conflictMetadata: ConflictMetadata;

  @SpeakeasyMetadata({ data: "json, name=destinationCommitId" })
  destinationCommitId: string;

  @SpeakeasyMetadata({ data: "json, name=mergeHunks", elemType: MergeHunk })
  mergeHunks: MergeHunk[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceCommitId" })
  sourceCommitId: string;
}

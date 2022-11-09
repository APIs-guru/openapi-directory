import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConflictMetadata } from "./conflictmetadata";
import { MergeHunk } from "./mergehunk";


export class DescribeMergeConflictsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseCommitId" })
  baseCommitId?: string;

  @Metadata({ data: "json, name=conflictMetadata" })
  conflictMetadata: ConflictMetadata;

  @Metadata({ data: "json, name=destinationCommitId" })
  destinationCommitId: string;

  @Metadata({ data: "json, name=mergeHunks", elemType: shared.MergeHunk })
  mergeHunks: MergeHunk[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=sourceCommitId" })
  sourceCommitId: string;
}

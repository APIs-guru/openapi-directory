import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConflictMetadata } from "./conflictmetadata";


export class GetMergeConflictsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseCommitId" })
  baseCommitId?: string;

  @Metadata({ data: "json, name=conflictMetadataList", elemType: shared.ConflictMetadata })
  conflictMetadataList: ConflictMetadata[];

  @Metadata({ data: "json, name=destinationCommitId" })
  destinationCommitId: string;

  @Metadata({ data: "json, name=mergeable" })
  mergeable: boolean;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=sourceCommitId" })
  sourceCommitId: string;
}

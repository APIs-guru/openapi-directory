import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConflictMetadata } from "./conflictmetadata";



export class GetMergeConflictsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseCommitId" })
  baseCommitId?: string;

  @SpeakeasyMetadata({ data: "json, name=conflictMetadataList", elemType: ConflictMetadata })
  conflictMetadataList: ConflictMetadata[];

  @SpeakeasyMetadata({ data: "json, name=destinationCommitId" })
  destinationCommitId: string;

  @SpeakeasyMetadata({ data: "json, name=mergeable" })
  mergeable: boolean;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceCommitId" })
  sourceCommitId: string;
}

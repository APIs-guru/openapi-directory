import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMergeCommitOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseCommitId" })
  baseCommitId?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationCommitId" })
  destinationCommitId?: string;

  @SpeakeasyMetadata({ data: "json, name=mergedCommitId" })
  mergedCommitId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceCommitId" })
  sourceCommitId?: string;
}

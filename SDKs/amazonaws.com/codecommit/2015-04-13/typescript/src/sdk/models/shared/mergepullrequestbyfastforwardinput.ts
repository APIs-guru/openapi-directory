import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MergePullRequestByFastForwardInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @SpeakeasyMetadata({ data: "json, name=sourceCommitId" })
  sourceCommitId?: string;
}

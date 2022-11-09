import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MergePullRequestByFastForwardInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @Metadata({ data: "json, name=sourceCommitId" })
  sourceCommitId?: string;
}

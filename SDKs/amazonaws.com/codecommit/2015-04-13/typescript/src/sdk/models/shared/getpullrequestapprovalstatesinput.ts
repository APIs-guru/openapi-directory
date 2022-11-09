import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPullRequestApprovalStatesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId: string;
}

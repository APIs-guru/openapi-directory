import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPullRequestApprovalStatesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EvaluatePullRequestApprovalRulesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId: string;
}

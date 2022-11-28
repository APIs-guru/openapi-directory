import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApprovalRule } from "./approvalrule";
import { PullRequestStatusEnumEnum } from "./pullrequeststatusenumenum";
import { PullRequestTarget } from "./pullrequesttarget";



// PullRequest
/** 
 * Returns information about a pull request.
**/
export class PullRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRules", elemType: ApprovalRule })
  approvalRules?: ApprovalRule[];

  @SpeakeasyMetadata({ data: "json, name=authorArn" })
  authorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=lastActivityDate" })
  lastActivityDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=pullRequestId" })
  pullRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=pullRequestStatus" })
  pullRequestStatus?: PullRequestStatusEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=pullRequestTargets", elemType: PullRequestTarget })
  pullRequestTargets?: PullRequestTarget[];

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}

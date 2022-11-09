import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApprovalRule } from "./approvalrule";
import { PullRequestStatusEnumEnum } from "./pullrequeststatusenumenum";
import { PullRequestTarget } from "./pullrequesttarget";


// PullRequest
/** 
 * Returns information about a pull request.
**/
export class PullRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRules", elemType: shared.ApprovalRule })
  approvalRules?: ApprovalRule[];

  @Metadata({ data: "json, name=authorArn" })
  authorArn?: string;

  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=lastActivityDate" })
  lastActivityDate?: Date;

  @Metadata({ data: "json, name=pullRequestId" })
  pullRequestId?: string;

  @Metadata({ data: "json, name=pullRequestStatus" })
  pullRequestStatus?: PullRequestStatusEnumEnum;

  @Metadata({ data: "json, name=pullRequestTargets", elemType: shared.PullRequestTarget })
  pullRequestTargets?: PullRequestTarget[];

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}

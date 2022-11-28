import { SpeakeasyBase } from "../../../internal/utils";
import { ApprovalRule } from "./approvalrule";
import { PullRequestStatusEnumEnum } from "./pullrequeststatusenumenum";
import { PullRequestTarget } from "./pullrequesttarget";
/**
 * Returns information about a pull request.
**/
export declare class PullRequest extends SpeakeasyBase {
    approvalRules?: ApprovalRule[];
    authorArn?: string;
    clientRequestToken?: string;
    creationDate?: Date;
    description?: string;
    lastActivityDate?: Date;
    pullRequestId?: string;
    pullRequestStatus?: PullRequestStatusEnumEnum;
    pullRequestTargets?: PullRequestTarget[];
    revisionId?: string;
    title?: string;
}

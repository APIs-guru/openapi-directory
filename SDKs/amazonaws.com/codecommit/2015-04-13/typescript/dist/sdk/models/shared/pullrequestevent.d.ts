import { SpeakeasyBase } from "../../../internal/utils";
import { ApprovalRuleEventMetadata } from "./approvalruleeventmetadata";
import { ApprovalRuleOverriddenEventMetadata } from "./approvalruleoverriddeneventmetadata";
import { ApprovalStateChangedEventMetadata } from "./approvalstatechangedeventmetadata";
import { PullRequestCreatedEventMetadata } from "./pullrequestcreatedeventmetadata";
import { PullRequestEventTypeEnum } from "./pullrequesteventtypeenum";
import { PullRequestMergedStateChangedEventMetadata } from "./pullrequestmergedstatechangedeventmetadata";
import { PullRequestSourceReferenceUpdatedEventMetadata } from "./pullrequestsourcereferenceupdatedeventmetadata";
import { PullRequestStatusChangedEventMetadata } from "./pullrequeststatuschangedeventmetadata";
/**
 * Returns information about a pull request event.
**/
export declare class PullRequestEvent extends SpeakeasyBase {
    actorArn?: string;
    approvalRuleEventMetadata?: ApprovalRuleEventMetadata;
    approvalRuleOverriddenEventMetadata?: ApprovalRuleOverriddenEventMetadata;
    approvalStateChangedEventMetadata?: ApprovalStateChangedEventMetadata;
    eventDate?: Date;
    pullRequestCreatedEventMetadata?: PullRequestCreatedEventMetadata;
    pullRequestEventType?: PullRequestEventTypeEnum;
    pullRequestId?: string;
    pullRequestMergedStateChangedEventMetadata?: PullRequestMergedStateChangedEventMetadata;
    pullRequestSourceReferenceUpdatedEventMetadata?: PullRequestSourceReferenceUpdatedEventMetadata;
    pullRequestStatusChangedEventMetadata?: PullRequestStatusChangedEventMetadata;
}

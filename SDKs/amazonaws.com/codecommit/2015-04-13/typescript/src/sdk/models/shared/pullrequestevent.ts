import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApprovalRuleEventMetadata } from "./approvalruleeventmetadata";
import { ApprovalRuleOverriddenEventMetadata } from "./approvalruleoverriddeneventmetadata";
import { ApprovalStateChangedEventMetadata } from "./approvalstatechangedeventmetadata";
import { PullRequestCreatedEventMetadata } from "./pullrequestcreatedeventmetadata";
import { PullRequestEventTypeEnum } from "./pullrequesteventtypeenum";
import { PullRequestMergedStateChangedEventMetadata } from "./pullrequestmergedstatechangedeventmetadata";
import { PullRequestSourceReferenceUpdatedEventMetadata } from "./pullrequestsourcereferenceupdatedeventmetadata";
import { PullRequestStatusChangedEventMetadata } from "./pullrequeststatuschangedeventmetadata";


// PullRequestEvent
/** 
 * Returns information about a pull request event.
**/
export class PullRequestEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=actorArn" })
  actorArn?: string;

  @Metadata({ data: "json, name=approvalRuleEventMetadata" })
  approvalRuleEventMetadata?: ApprovalRuleEventMetadata;

  @Metadata({ data: "json, name=approvalRuleOverriddenEventMetadata" })
  approvalRuleOverriddenEventMetadata?: ApprovalRuleOverriddenEventMetadata;

  @Metadata({ data: "json, name=approvalStateChangedEventMetadata" })
  approvalStateChangedEventMetadata?: ApprovalStateChangedEventMetadata;

  @Metadata({ data: "json, name=eventDate" })
  eventDate?: Date;

  @Metadata({ data: "json, name=pullRequestCreatedEventMetadata" })
  pullRequestCreatedEventMetadata?: PullRequestCreatedEventMetadata;

  @Metadata({ data: "json, name=pullRequestEventType" })
  pullRequestEventType?: PullRequestEventTypeEnum;

  @Metadata({ data: "json, name=pullRequestId" })
  pullRequestId?: string;

  @Metadata({ data: "json, name=pullRequestMergedStateChangedEventMetadata" })
  pullRequestMergedStateChangedEventMetadata?: PullRequestMergedStateChangedEventMetadata;

  @Metadata({ data: "json, name=pullRequestSourceReferenceUpdatedEventMetadata" })
  pullRequestSourceReferenceUpdatedEventMetadata?: PullRequestSourceReferenceUpdatedEventMetadata;

  @Metadata({ data: "json, name=pullRequestStatusChangedEventMetadata" })
  pullRequestStatusChangedEventMetadata?: PullRequestStatusChangedEventMetadata;
}

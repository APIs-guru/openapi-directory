import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=actorArn" })
  actorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=approvalRuleEventMetadata" })
  approvalRuleEventMetadata?: ApprovalRuleEventMetadata;

  @SpeakeasyMetadata({ data: "json, name=approvalRuleOverriddenEventMetadata" })
  approvalRuleOverriddenEventMetadata?: ApprovalRuleOverriddenEventMetadata;

  @SpeakeasyMetadata({ data: "json, name=approvalStateChangedEventMetadata" })
  approvalStateChangedEventMetadata?: ApprovalStateChangedEventMetadata;

  @SpeakeasyMetadata({ data: "json, name=eventDate" })
  eventDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=pullRequestCreatedEventMetadata" })
  pullRequestCreatedEventMetadata?: PullRequestCreatedEventMetadata;

  @SpeakeasyMetadata({ data: "json, name=pullRequestEventType" })
  pullRequestEventType?: PullRequestEventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=pullRequestId" })
  pullRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=pullRequestMergedStateChangedEventMetadata" })
  pullRequestMergedStateChangedEventMetadata?: PullRequestMergedStateChangedEventMetadata;

  @SpeakeasyMetadata({ data: "json, name=pullRequestSourceReferenceUpdatedEventMetadata" })
  pullRequestSourceReferenceUpdatedEventMetadata?: PullRequestSourceReferenceUpdatedEventMetadata;

  @SpeakeasyMetadata({ data: "json, name=pullRequestStatusChangedEventMetadata" })
  pullRequestStatusChangedEventMetadata?: PullRequestStatusChangedEventMetadata;
}

package shared

import (
	"time"
)

type PullRequestEvent struct {
	ActorArn                                       *string                                         `json:"actorArn"`
	ApprovalRuleEventMetadata                      *ApprovalRuleEventMetadata                      `json:"approvalRuleEventMetadata"`
	ApprovalRuleOverriddenEventMetadata            *ApprovalRuleOverriddenEventMetadata            `json:"approvalRuleOverriddenEventMetadata"`
	ApprovalStateChangedEventMetadata              *ApprovalStateChangedEventMetadata              `json:"approvalStateChangedEventMetadata"`
	EventDate                                      *time.Time                                      `json:"eventDate"`
	PullRequestCreatedEventMetadata                *PullRequestCreatedEventMetadata                `json:"pullRequestCreatedEventMetadata"`
	PullRequestEventType                           *PullRequestEventTypeEnum                       `json:"pullRequestEventType"`
	PullRequestID                                  *string                                         `json:"pullRequestId"`
	PullRequestMergedStateChangedEventMetadata     *PullRequestMergedStateChangedEventMetadata     `json:"pullRequestMergedStateChangedEventMetadata"`
	PullRequestSourceReferenceUpdatedEventMetadata *PullRequestSourceReferenceUpdatedEventMetadata `json:"pullRequestSourceReferenceUpdatedEventMetadata"`
	PullRequestStatusChangedEventMetadata          *PullRequestStatusChangedEventMetadata          `json:"pullRequestStatusChangedEventMetadata"`
}

package shared

import (
	"time"
)

type PullRequestEvent struct {
	ActorArn                                       *string                                         `json:"actorArn,omitempty"`
	ApprovalRuleEventMetadata                      *ApprovalRuleEventMetadata                      `json:"approvalRuleEventMetadata,omitempty"`
	ApprovalRuleOverriddenEventMetadata            *ApprovalRuleOverriddenEventMetadata            `json:"approvalRuleOverriddenEventMetadata,omitempty"`
	ApprovalStateChangedEventMetadata              *ApprovalStateChangedEventMetadata              `json:"approvalStateChangedEventMetadata,omitempty"`
	EventDate                                      *time.Time                                      `json:"eventDate,omitempty"`
	PullRequestCreatedEventMetadata                *PullRequestCreatedEventMetadata                `json:"pullRequestCreatedEventMetadata,omitempty"`
	PullRequestEventType                           *PullRequestEventTypeEnum                       `json:"pullRequestEventType,omitempty"`
	PullRequestID                                  *string                                         `json:"pullRequestId,omitempty"`
	PullRequestMergedStateChangedEventMetadata     *PullRequestMergedStateChangedEventMetadata     `json:"pullRequestMergedStateChangedEventMetadata,omitempty"`
	PullRequestSourceReferenceUpdatedEventMetadata *PullRequestSourceReferenceUpdatedEventMetadata `json:"pullRequestSourceReferenceUpdatedEventMetadata,omitempty"`
	PullRequestStatusChangedEventMetadata          *PullRequestStatusChangedEventMetadata          `json:"pullRequestStatusChangedEventMetadata,omitempty"`
}

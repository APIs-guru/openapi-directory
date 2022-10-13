package shared

import (
	"time"
)

type PullRequest struct {
	ApprovalRules      []ApprovalRule             `json:"approvalRules"`
	AuthorArn          *string                    `json:"authorArn"`
	ClientRequestToken *string                    `json:"clientRequestToken"`
	CreationDate       *time.Time                 `json:"creationDate"`
	Description        *string                    `json:"description"`
	LastActivityDate   *time.Time                 `json:"lastActivityDate"`
	PullRequestID      *string                    `json:"pullRequestId"`
	PullRequestStatus  *PullRequestStatusEnumEnum `json:"pullRequestStatus"`
	PullRequestTargets []PullRequestTarget        `json:"pullRequestTargets"`
	RevisionID         *string                    `json:"revisionId"`
	Title              *string                    `json:"title"`
}

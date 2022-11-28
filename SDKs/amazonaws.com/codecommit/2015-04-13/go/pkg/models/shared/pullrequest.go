package shared

import (
	"time"
)

// PullRequest
// Returns information about a pull request.
type PullRequest struct {
	ApprovalRules      []ApprovalRule             `json:"approvalRules,omitempty"`
	AuthorArn          *string                    `json:"authorArn,omitempty"`
	ClientRequestToken *string                    `json:"clientRequestToken,omitempty"`
	CreationDate       *time.Time                 `json:"creationDate,omitempty"`
	Description        *string                    `json:"description,omitempty"`
	LastActivityDate   *time.Time                 `json:"lastActivityDate,omitempty"`
	PullRequestID      *string                    `json:"pullRequestId,omitempty"`
	PullRequestStatus  *PullRequestStatusEnumEnum `json:"pullRequestStatus,omitempty"`
	PullRequestTargets []PullRequestTarget        `json:"pullRequestTargets,omitempty"`
	RevisionID         *string                    `json:"revisionId,omitempty"`
	Title              *string                    `json:"title,omitempty"`
}

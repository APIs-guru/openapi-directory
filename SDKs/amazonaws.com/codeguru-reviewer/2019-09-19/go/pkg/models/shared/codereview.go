package shared

import (
	"time"
)

// CodeReview
//
//	Information about a code review. A code review belongs to the associated repository that contains the reviewed code.
type CodeReview struct {
	AnalysisTypes        []AnalysisTypeEnum `json:"AnalysisTypes,omitempty"`
	AssociationArn       *string            `json:"AssociationArn,omitempty"`
	CodeReviewArn        *string            `json:"CodeReviewArn,omitempty"`
	CreatedTimeStamp     *time.Time         `json:"CreatedTimeStamp,omitempty"`
	LastUpdatedTimeStamp *time.Time         `json:"LastUpdatedTimeStamp,omitempty"`
	Metrics              *Metrics           `json:"Metrics,omitempty"`
	Name                 *string            `json:"Name,omitempty"`
	Owner                *string            `json:"Owner,omitempty"`
	ProviderType         *ProviderTypeEnum  `json:"ProviderType,omitempty"`
	PullRequestID        *string            `json:"PullRequestId,omitempty"`
	RepositoryName       *string            `json:"RepositoryName,omitempty"`
	SourceCodeType       *SourceCodeType    `json:"SourceCodeType,omitempty"`
	State                *JobStateEnum      `json:"State,omitempty"`
	StateReason          *string            `json:"StateReason,omitempty"`
	Type                 *TypeEnum          `json:"Type,omitempty"`
}

package shared

import (
	"time"
)

type CodeReviewSummary struct {
	CodeReviewArn        *string           `json:"CodeReviewArn,omitempty"`
	CreatedTimeStamp     *time.Time        `json:"CreatedTimeStamp,omitempty"`
	LastUpdatedTimeStamp *time.Time        `json:"LastUpdatedTimeStamp,omitempty"`
	MetricsSummary       *MetricsSummary   `json:"MetricsSummary,omitempty"`
	Name                 *string           `json:"Name,omitempty"`
	Owner                *string           `json:"Owner,omitempty"`
	ProviderType         *ProviderTypeEnum `json:"ProviderType,omitempty"`
	PullRequestID        *string           `json:"PullRequestId,omitempty"`
	RepositoryName       *string           `json:"RepositoryName,omitempty"`
	SourceCodeType       *SourceCodeType   `json:"SourceCodeType,omitempty"`
	State                *JobStateEnum     `json:"State,omitempty"`
	Type                 *TypeEnum         `json:"Type,omitempty"`
}

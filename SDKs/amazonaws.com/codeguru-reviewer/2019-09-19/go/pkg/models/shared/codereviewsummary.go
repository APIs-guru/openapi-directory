package shared

import (
	"time"
)

type CodeReviewSummary struct {
	CodeReviewArn        *string           `json:"CodeReviewArn"`
	CreatedTimeStamp     *time.Time        `json:"CreatedTimeStamp"`
	LastUpdatedTimeStamp *time.Time        `json:"LastUpdatedTimeStamp"`
	MetricsSummary       *MetricsSummary   `json:"MetricsSummary"`
	Name                 *string           `json:"Name"`
	Owner                *string           `json:"Owner"`
	ProviderType         *ProviderTypeEnum `json:"ProviderType"`
	PullRequestID        *string           `json:"PullRequestId"`
	RepositoryName       *string           `json:"RepositoryName"`
	SourceCodeType       *SourceCodeType   `json:"SourceCodeType"`
	State                *JobStateEnum     `json:"State"`
	Type                 *TypeEnum         `json:"Type"`
}

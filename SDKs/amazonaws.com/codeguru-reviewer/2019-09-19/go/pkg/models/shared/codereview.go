package shared

import (
	"time"
)

type CodeReview struct {
	AnalysisTypes        []AnalysisTypeEnum `json:"AnalysisTypes"`
	AssociationArn       *string            `json:"AssociationArn"`
	CodeReviewArn        *string            `json:"CodeReviewArn"`
	CreatedTimeStamp     *time.Time         `json:"CreatedTimeStamp"`
	LastUpdatedTimeStamp *time.Time         `json:"LastUpdatedTimeStamp"`
	Metrics              *Metrics           `json:"Metrics"`
	Name                 *string            `json:"Name"`
	Owner                *string            `json:"Owner"`
	ProviderType         *ProviderTypeEnum  `json:"ProviderType"`
	PullRequestID        *string            `json:"PullRequestId"`
	RepositoryName       *string            `json:"RepositoryName"`
	SourceCodeType       *SourceCodeType    `json:"SourceCodeType"`
	State                *JobStateEnum      `json:"State"`
	StateReason          *string            `json:"StateReason"`
	Type                 *TypeEnum          `json:"Type"`
}

package shared

import (
	"time"
)

// ProjectSummary
// An object providing summary information for a particular project for an associated AWS account and region.
type ProjectSummary struct {
	Arn         *string           `json:"arn,omitempty"`
	CreatedDate time.Time         `json:"createdDate"`
	ProjectName string            `json:"projectName"`
	Tags        map[string]string `json:"tags,omitempty"`
	UpdatedDate time.Time         `json:"updatedDate"`
}

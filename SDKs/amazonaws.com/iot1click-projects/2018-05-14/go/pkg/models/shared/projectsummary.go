package shared

import (
	"time"
)

type ProjectSummary struct {
	Arn         *string           `json:"arn"`
	CreatedDate time.Time         `json:"createdDate"`
	ProjectName string            `json:"projectName"`
	Tags        map[string]string `json:"tags"`
	UpdatedDate time.Time         `json:"updatedDate"`
}

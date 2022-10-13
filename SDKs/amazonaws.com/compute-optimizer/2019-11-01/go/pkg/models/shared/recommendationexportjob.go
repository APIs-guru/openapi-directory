package shared

import (
	"time"
)

type RecommendationExportJob struct {
	CreationTimestamp    *time.Time         `json:"creationTimestamp"`
	Destination          *ExportDestination `json:"destination"`
	FailureReason        *string            `json:"failureReason"`
	JobID                *string            `json:"jobId"`
	LastUpdatedTimestamp *time.Time         `json:"lastUpdatedTimestamp"`
	ResourceType         *ResourceTypeEnum  `json:"resourceType"`
	Status               *JobStatusEnum     `json:"status"`
}

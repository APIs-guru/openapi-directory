package shared

import (
	"time"
)

type RecommendationExportJob struct {
	CreationTimestamp    *time.Time         `json:"creationTimestamp,omitempty"`
	Destination          *ExportDestination `json:"destination,omitempty"`
	FailureReason        *string            `json:"failureReason,omitempty"`
	JobID                *string            `json:"jobId,omitempty"`
	LastUpdatedTimestamp *time.Time         `json:"lastUpdatedTimestamp,omitempty"`
	ResourceType         *ResourceTypeEnum  `json:"resourceType,omitempty"`
	Status               *JobStatusEnum     `json:"status,omitempty"`
}

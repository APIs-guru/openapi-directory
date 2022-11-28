package shared

import (
	"time"
)

// RecommendationExportJob
// <p>Describes a recommendation export job.</p> <p>Use the <a>DescribeRecommendationExportJobs</a> action to view your recommendation export jobs.</p> <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your recommendations.</p>
type RecommendationExportJob struct {
	CreationTimestamp    *time.Time         `json:"creationTimestamp,omitempty"`
	Destination          *ExportDestination `json:"destination,omitempty"`
	FailureReason        *string            `json:"failureReason,omitempty"`
	JobID                *string            `json:"jobId,omitempty"`
	LastUpdatedTimestamp *time.Time         `json:"lastUpdatedTimestamp,omitempty"`
	ResourceType         *ResourceTypeEnum  `json:"resourceType,omitempty"`
	Status               *JobStatusEnum     `json:"status,omitempty"`
}

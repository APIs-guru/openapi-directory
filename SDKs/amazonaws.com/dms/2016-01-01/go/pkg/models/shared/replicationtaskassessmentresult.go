package shared

import (
	"time"
)

type ReplicationTaskAssessmentResult struct {
	AssessmentResults                 *string    `json:"AssessmentResults"`
	AssessmentResultsFile             *string    `json:"AssessmentResultsFile"`
	AssessmentStatus                  *string    `json:"AssessmentStatus"`
	ReplicationTaskArn                *string    `json:"ReplicationTaskArn"`
	ReplicationTaskIdentifier         *string    `json:"ReplicationTaskIdentifier"`
	ReplicationTaskLastAssessmentDate *time.Time `json:"ReplicationTaskLastAssessmentDate"`
	S3ObjectURL                       *string    `json:"S3ObjectUrl"`
}

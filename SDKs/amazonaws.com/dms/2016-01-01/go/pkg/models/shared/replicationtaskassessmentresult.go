package shared

import (
	"time"
)

type ReplicationTaskAssessmentResult struct {
	AssessmentResults                 *string    `json:"AssessmentResults,omitempty"`
	AssessmentResultsFile             *string    `json:"AssessmentResultsFile,omitempty"`
	AssessmentStatus                  *string    `json:"AssessmentStatus,omitempty"`
	ReplicationTaskArn                *string    `json:"ReplicationTaskArn,omitempty"`
	ReplicationTaskIdentifier         *string    `json:"ReplicationTaskIdentifier,omitempty"`
	ReplicationTaskLastAssessmentDate *time.Time `json:"ReplicationTaskLastAssessmentDate,omitempty"`
	S3ObjectURL                       *string    `json:"S3ObjectUrl,omitempty"`
}

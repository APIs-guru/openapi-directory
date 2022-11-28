package shared

import (
	"time"
)

// ReplicationTaskAssessmentRun
// <p>Provides information that describes a premigration assessment run that you have started using the <code>StartReplicationTaskAssessmentRun</code> operation.</p> <p>Some of the information appears based on other operations that can return the <code>ReplicationTaskAssessmentRun</code> object.</p>
type ReplicationTaskAssessmentRun struct {
	AssessmentProgress                       *ReplicationTaskAssessmentRunProgress `json:"AssessmentProgress,omitempty"`
	AssessmentRunName                        *string                               `json:"AssessmentRunName,omitempty"`
	LastFailureMessage                       *string                               `json:"LastFailureMessage,omitempty"`
	ReplicationTaskArn                       *string                               `json:"ReplicationTaskArn,omitempty"`
	ReplicationTaskAssessmentRunArn          *string                               `json:"ReplicationTaskAssessmentRunArn,omitempty"`
	ReplicationTaskAssessmentRunCreationDate *time.Time                            `json:"ReplicationTaskAssessmentRunCreationDate,omitempty"`
	ResultEncryptionMode                     *string                               `json:"ResultEncryptionMode,omitempty"`
	ResultKmsKeyArn                          *string                               `json:"ResultKmsKeyArn,omitempty"`
	ResultLocationBucket                     *string                               `json:"ResultLocationBucket,omitempty"`
	ResultLocationFolder                     *string                               `json:"ResultLocationFolder,omitempty"`
	ServiceAccessRoleArn                     *string                               `json:"ServiceAccessRoleArn,omitempty"`
	Status                                   *string                               `json:"Status,omitempty"`
}

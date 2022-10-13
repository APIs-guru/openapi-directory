package shared

import (
	"time"
)

type ReplicationTaskAssessmentRun struct {
	AssessmentProgress                       *ReplicationTaskAssessmentRunProgress `json:"AssessmentProgress"`
	AssessmentRunName                        *string                               `json:"AssessmentRunName"`
	LastFailureMessage                       *string                               `json:"LastFailureMessage"`
	ReplicationTaskArn                       *string                               `json:"ReplicationTaskArn"`
	ReplicationTaskAssessmentRunArn          *string                               `json:"ReplicationTaskAssessmentRunArn"`
	ReplicationTaskAssessmentRunCreationDate *time.Time                            `json:"ReplicationTaskAssessmentRunCreationDate"`
	ResultEncryptionMode                     *string                               `json:"ResultEncryptionMode"`
	ResultKmsKeyArn                          *string                               `json:"ResultKmsKeyArn"`
	ResultLocationBucket                     *string                               `json:"ResultLocationBucket"`
	ResultLocationFolder                     *string                               `json:"ResultLocationFolder"`
	ServiceAccessRoleArn                     *string                               `json:"ServiceAccessRoleArn"`
	Status                                   *string                               `json:"Status"`
}

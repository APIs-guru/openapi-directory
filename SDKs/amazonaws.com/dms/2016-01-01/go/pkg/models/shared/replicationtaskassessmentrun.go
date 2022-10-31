package shared

import (
"time")

type ReplicationTaskAssessmentRun struct {
    AssessmentProgress *ReplicationTaskAssessmentRunProgress `json:"AssessmentProgress,omitempty"`
    AssessmentRunName *string `json:"AssessmentRunName,omitempty"`
    LastFailureMessage *string `json:"LastFailureMessage,omitempty"`
    ReplicationTaskArn *string `json:"ReplicationTaskArn,omitempty"`
    ReplicationTaskAssessmentRunArn *string `json:"ReplicationTaskAssessmentRunArn,omitempty"`
    ReplicationTaskAssessmentRunCreationDate *time.Time `json:"ReplicationTaskAssessmentRunCreationDate,omitempty"`
    ResultEncryptionMode *string `json:"ResultEncryptionMode,omitempty"`
    ResultKmsKeyArn *string `json:"ResultKmsKeyArn,omitempty"`
    ResultLocationBucket *string `json:"ResultLocationBucket,omitempty"`
    ResultLocationFolder *string `json:"ResultLocationFolder,omitempty"`
    ServiceAccessRoleArn *string `json:"ServiceAccessRoleArn,omitempty"`
    Status *string `json:"Status,omitempty"`
    
}


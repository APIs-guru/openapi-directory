package shared

type StartReplicationTaskAssessmentRunMessage struct {
	AssessmentRunName    string   `json:"AssessmentRunName"`
	Exclude              []string `json:"Exclude,omitempty"`
	IncludeOnly          []string `json:"IncludeOnly,omitempty"`
	ReplicationTaskArn   string   `json:"ReplicationTaskArn"`
	ResultEncryptionMode *string  `json:"ResultEncryptionMode,omitempty"`
	ResultKmsKeyArn      *string  `json:"ResultKmsKeyArn,omitempty"`
	ResultLocationBucket string   `json:"ResultLocationBucket"`
	ResultLocationFolder *string  `json:"ResultLocationFolder,omitempty"`
	ServiceAccessRoleArn string   `json:"ServiceAccessRoleArn"`
}

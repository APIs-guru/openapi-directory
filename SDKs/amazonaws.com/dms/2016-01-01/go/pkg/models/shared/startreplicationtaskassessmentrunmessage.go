package shared

type StartReplicationTaskAssessmentRunMessage struct {
	AssessmentRunName    string   `json:"AssessmentRunName"`
	Exclude              []string `json:"Exclude"`
	IncludeOnly          []string `json:"IncludeOnly"`
	ReplicationTaskArn   string   `json:"ReplicationTaskArn"`
	ResultEncryptionMode *string  `json:"ResultEncryptionMode"`
	ResultKmsKeyArn      *string  `json:"ResultKmsKeyArn"`
	ResultLocationBucket string   `json:"ResultLocationBucket"`
	ResultLocationFolder *string  `json:"ResultLocationFolder"`
	ServiceAccessRoleArn string   `json:"ServiceAccessRoleArn"`
}

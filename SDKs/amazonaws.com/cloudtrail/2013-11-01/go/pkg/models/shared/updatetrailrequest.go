package shared

// UpdateTrailRequest
// Specifies settings to update for the trail.
type UpdateTrailRequest struct {
	CloudWatchLogsLogGroupArn  *string `json:"CloudWatchLogsLogGroupArn,omitempty"`
	CloudWatchLogsRoleArn      *string `json:"CloudWatchLogsRoleArn,omitempty"`
	EnableLogFileValidation    *bool   `json:"EnableLogFileValidation,omitempty"`
	IncludeGlobalServiceEvents *bool   `json:"IncludeGlobalServiceEvents,omitempty"`
	IsMultiRegionTrail         *bool   `json:"IsMultiRegionTrail,omitempty"`
	IsOrganizationTrail        *bool   `json:"IsOrganizationTrail,omitempty"`
	KmsKeyID                   *string `json:"KmsKeyId,omitempty"`
	Name                       string  `json:"Name"`
	S3BucketName               *string `json:"S3BucketName,omitempty"`
	S3KeyPrefix                *string `json:"S3KeyPrefix,omitempty"`
	SnsTopicName               *string `json:"SnsTopicName,omitempty"`
}

package shared

// CreateTrailRequest
// Specifies the settings for each trail.
type CreateTrailRequest struct {
	CloudWatchLogsLogGroupArn  *string `json:"CloudWatchLogsLogGroupArn,omitempty"`
	CloudWatchLogsRoleArn      *string `json:"CloudWatchLogsRoleArn,omitempty"`
	EnableLogFileValidation    *bool   `json:"EnableLogFileValidation,omitempty"`
	IncludeGlobalServiceEvents *bool   `json:"IncludeGlobalServiceEvents,omitempty"`
	IsMultiRegionTrail         *bool   `json:"IsMultiRegionTrail,omitempty"`
	IsOrganizationTrail        *bool   `json:"IsOrganizationTrail,omitempty"`
	KmsKeyID                   *string `json:"KmsKeyId,omitempty"`
	Name                       string  `json:"Name"`
	S3BucketName               string  `json:"S3BucketName"`
	S3KeyPrefix                *string `json:"S3KeyPrefix,omitempty"`
	SnsTopicName               *string `json:"SnsTopicName,omitempty"`
	TagsList                   []Tag   `json:"TagsList,omitempty"`
}

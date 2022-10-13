package shared

type CreateTrailRequest struct {
	CloudWatchLogsLogGroupArn  *string `json:"CloudWatchLogsLogGroupArn"`
	CloudWatchLogsRoleArn      *string `json:"CloudWatchLogsRoleArn"`
	EnableLogFileValidation    *bool   `json:"EnableLogFileValidation"`
	IncludeGlobalServiceEvents *bool   `json:"IncludeGlobalServiceEvents"`
	IsMultiRegionTrail         *bool   `json:"IsMultiRegionTrail"`
	IsOrganizationTrail        *bool   `json:"IsOrganizationTrail"`
	KmsKeyID                   *string `json:"KmsKeyId"`
	Name                       string  `json:"Name"`
	S3BucketName               string  `json:"S3BucketName"`
	S3KeyPrefix                *string `json:"S3KeyPrefix"`
	SnsTopicName               *string `json:"SnsTopicName"`
	TagsList                   []Tag   `json:"TagsList"`
}

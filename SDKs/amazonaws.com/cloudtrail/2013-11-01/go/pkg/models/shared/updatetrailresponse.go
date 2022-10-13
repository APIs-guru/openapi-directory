package shared

type UpdateTrailResponse struct {
	CloudWatchLogsLogGroupArn  *string `json:"CloudWatchLogsLogGroupArn"`
	CloudWatchLogsRoleArn      *string `json:"CloudWatchLogsRoleArn"`
	IncludeGlobalServiceEvents *bool   `json:"IncludeGlobalServiceEvents"`
	IsMultiRegionTrail         *bool   `json:"IsMultiRegionTrail"`
	IsOrganizationTrail        *bool   `json:"IsOrganizationTrail"`
	KmsKeyID                   *string `json:"KmsKeyId"`
	LogFileValidationEnabled   *bool   `json:"LogFileValidationEnabled"`
	Name                       *string `json:"Name"`
	S3BucketName               *string `json:"S3BucketName"`
	S3KeyPrefix                *string `json:"S3KeyPrefix"`
	SnsTopicArn                *string `json:"SnsTopicARN"`
	SnsTopicName               *string `json:"SnsTopicName"`
	TrailArn                   *string `json:"TrailARN"`
}

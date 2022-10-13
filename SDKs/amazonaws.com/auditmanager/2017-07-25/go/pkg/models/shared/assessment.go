package shared

type Assessment struct {
	Arn        *string              `json:"arn"`
	AwsAccount *AwsAccount          `json:"awsAccount"`
	Framework  *AssessmentFramework `json:"framework"`
	Metadata   *AssessmentMetadata  `json:"metadata"`
	Tags       map[string]string    `json:"tags"`
}

package shared

// Assessment
//
//	An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework.
type Assessment struct {
	Arn        *string              `json:"arn,omitempty"`
	AwsAccount *AwsAccount          `json:"awsAccount,omitempty"`
	Framework  *AssessmentFramework `json:"framework,omitempty"`
	Metadata   *AssessmentMetadata  `json:"metadata,omitempty"`
	Tags       map[string]string    `json:"tags,omitempty"`
}

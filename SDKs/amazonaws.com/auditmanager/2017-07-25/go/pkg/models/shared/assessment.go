package shared



type Assessment struct {
    Arn *string `json:"arn,omitempty"`
    AwsAccount *AwsAccount `json:"awsAccount,omitempty"`
    Framework *AssessmentFramework `json:"framework,omitempty"`
    Metadata *AssessmentMetadata `json:"metadata,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}


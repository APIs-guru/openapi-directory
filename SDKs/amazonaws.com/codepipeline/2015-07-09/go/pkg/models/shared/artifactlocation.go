package shared

type ArtifactLocation struct {
	S3Location *S3ArtifactLocation       `json:"s3Location"`
	Type       *ArtifactLocationTypeEnum `json:"type"`
}

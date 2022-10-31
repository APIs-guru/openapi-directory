package shared

type ArtifactLocation struct {
	S3Location *S3ArtifactLocation       `json:"s3Location,omitempty"`
	Type       *ArtifactLocationTypeEnum `json:"type,omitempty"`
}

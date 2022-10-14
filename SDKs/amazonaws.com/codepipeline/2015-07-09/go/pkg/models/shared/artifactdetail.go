package shared

type ArtifactDetail struct {
	Name       *string     `json:"name,omitempty"`
	S3location *S3Location `json:"s3location,omitempty"`
}

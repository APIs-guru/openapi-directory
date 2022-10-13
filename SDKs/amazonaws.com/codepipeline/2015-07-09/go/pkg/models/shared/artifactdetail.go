package shared

type ArtifactDetail struct {
	Name       *string     `json:"name"`
	S3location *S3Location `json:"s3location"`
}

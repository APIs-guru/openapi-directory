package shared

// ArtifactDetail
// Artifact details for the action execution, such as the artifact location.
type ArtifactDetail struct {
	Name       *string     `json:"name,omitempty"`
	S3location *S3Location `json:"s3location,omitempty"`
}

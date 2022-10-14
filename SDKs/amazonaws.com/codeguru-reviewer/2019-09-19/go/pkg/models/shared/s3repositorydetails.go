package shared

type S3RepositoryDetails struct {
	BucketName    *string        `json:"BucketName,omitempty"`
	CodeArtifacts *CodeArtifacts `json:"CodeArtifacts,omitempty"`
}

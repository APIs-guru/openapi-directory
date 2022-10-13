package shared

type S3RepositoryDetails struct {
	BucketName    *string        `json:"BucketName"`
	CodeArtifacts *CodeArtifacts `json:"CodeArtifacts"`
}

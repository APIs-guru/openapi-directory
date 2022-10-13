package shared

type GetBlobInput struct {
	BlobID         string `json:"blobId"`
	RepositoryName string `json:"repositoryName"`
}

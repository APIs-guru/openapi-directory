package shared

// GetBlobInput
// Represents the input of a get blob operation.
type GetBlobInput struct {
	BlobID         string `json:"blobId"`
	RepositoryName string `json:"repositoryName"`
}

package shared

type BlobMetadata struct {
	BlobID *string `json:"blobId"`
	Mode   *string `json:"mode"`
	Path   *string `json:"path"`
}

package shared

// BlobMetadata
// Returns information about a specific Git blob object.
type BlobMetadata struct {
	BlobID *string `json:"blobId,omitempty"`
	Mode   *string `json:"mode,omitempty"`
	Path   *string `json:"path,omitempty"`
}

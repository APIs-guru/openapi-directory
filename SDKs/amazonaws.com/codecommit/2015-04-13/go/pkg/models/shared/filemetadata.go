package shared

// FileMetadata
// A file to be added, updated, or deleted as part of a commit.
type FileMetadata struct {
	AbsolutePath *string               `json:"absolutePath,omitempty"`
	BlobID       *string               `json:"blobId,omitempty"`
	FileMode     *FileModeTypeEnumEnum `json:"fileMode,omitempty"`
}

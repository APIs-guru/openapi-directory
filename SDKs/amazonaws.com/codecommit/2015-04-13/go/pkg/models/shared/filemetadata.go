package shared

type FileMetadata struct {
	AbsolutePath *string               `json:"absolutePath,omitempty"`
	BlobID       *string               `json:"blobId,omitempty"`
	FileMode     *FileModeTypeEnumEnum `json:"fileMode,omitempty"`
}

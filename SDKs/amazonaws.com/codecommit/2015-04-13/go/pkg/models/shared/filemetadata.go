package shared

type FileMetadata struct {
	AbsolutePath *string               `json:"absolutePath"`
	BlobID       *string               `json:"blobId"`
	FileMode     *FileModeTypeEnumEnum `json:"fileMode"`
}

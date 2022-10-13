package shared

type File struct {
	AbsolutePath *string               `json:"absolutePath"`
	BlobID       *string               `json:"blobId"`
	FileMode     *FileModeTypeEnumEnum `json:"fileMode"`
	RelativePath *string               `json:"relativePath"`
}

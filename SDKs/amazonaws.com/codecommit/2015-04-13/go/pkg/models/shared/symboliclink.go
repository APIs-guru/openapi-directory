package shared

type SymbolicLink struct {
	AbsolutePath *string               `json:"absolutePath,omitempty"`
	BlobID       *string               `json:"blobId,omitempty"`
	FileMode     *FileModeTypeEnumEnum `json:"fileMode,omitempty"`
	RelativePath *string               `json:"relativePath,omitempty"`
}

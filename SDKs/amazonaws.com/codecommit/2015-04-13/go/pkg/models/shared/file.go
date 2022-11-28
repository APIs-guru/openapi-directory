package shared

// File
// Returns information about a file in a repository.
type File struct {
	AbsolutePath *string               `json:"absolutePath,omitempty"`
	BlobID       *string               `json:"blobId,omitempty"`
	FileMode     *FileModeTypeEnumEnum `json:"fileMode,omitempty"`
	RelativePath *string               `json:"relativePath,omitempty"`
}

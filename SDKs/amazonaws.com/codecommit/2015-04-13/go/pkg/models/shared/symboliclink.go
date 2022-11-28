package shared

// SymbolicLink
// Returns information about a symbolic link in a repository folder.
type SymbolicLink struct {
	AbsolutePath *string               `json:"absolutePath,omitempty"`
	BlobID       *string               `json:"blobId,omitempty"`
	FileMode     *FileModeTypeEnumEnum `json:"fileMode,omitempty"`
	RelativePath *string               `json:"relativePath,omitempty"`
}

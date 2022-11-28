package shared

// PutFileEntry
// Information about a file added or updated as part of a commit.
type PutFileEntry struct {
	FileContent *string               `json:"fileContent,omitempty"`
	FileMode    *FileModeTypeEnumEnum `json:"fileMode,omitempty"`
	FilePath    string                `json:"filePath"`
	SourceFile  *SourceFileSpecifier  `json:"sourceFile,omitempty"`
}

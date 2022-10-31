package shared

type PutFileEntry struct {
	FileContent *string               `json:"fileContent,omitempty"`
	FileMode    *FileModeTypeEnumEnum `json:"fileMode,omitempty"`
	FilePath    string                `json:"filePath"`
	SourceFile  *SourceFileSpecifier  `json:"sourceFile,omitempty"`
}

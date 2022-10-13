package shared

type PutFileEntry struct {
	FileContent *string               `json:"fileContent"`
	FileMode    *FileModeTypeEnumEnum `json:"fileMode"`
	FilePath    string                `json:"filePath"`
	SourceFile  *SourceFileSpecifier  `json:"sourceFile"`
}

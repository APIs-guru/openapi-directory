package shared

type ReplaceContentEntry struct {
	Content         *string                 `json:"content"`
	FileMode        *FileModeTypeEnumEnum   `json:"fileMode"`
	FilePath        string                  `json:"filePath"`
	ReplacementType ReplacementTypeEnumEnum `json:"replacementType"`
}

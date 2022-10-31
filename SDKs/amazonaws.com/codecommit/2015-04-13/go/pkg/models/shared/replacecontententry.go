package shared



type ReplaceContentEntry struct {
    Content *string `json:"content,omitempty"`
    FileMode *FileModeTypeEnumEnum `json:"fileMode,omitempty"`
    FilePath string `json:"filePath"`
    ReplacementType ReplacementTypeEnumEnum `json:"replacementType"`
    
}


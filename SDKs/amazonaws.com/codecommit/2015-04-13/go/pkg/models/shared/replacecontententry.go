package shared

// ReplaceContentEntry
// Information about a replacement content entry in the conflict of a merge or pull request operation.
type ReplaceContentEntry struct {
	Content         *string                 `json:"content,omitempty"`
	FileMode        *FileModeTypeEnumEnum   `json:"fileMode,omitempty"`
	FilePath        string                  `json:"filePath"`
	ReplacementType ReplacementTypeEnumEnum `json:"replacementType"`
}

package shared

// SetFileModeEntry
// Information about the file mode changes.
type SetFileModeEntry struct {
	FileMode FileModeTypeEnumEnum `json:"fileMode"`
	FilePath string               `json:"filePath"`
}

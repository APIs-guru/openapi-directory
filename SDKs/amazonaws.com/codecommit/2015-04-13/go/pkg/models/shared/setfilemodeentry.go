package shared

type SetFileModeEntry struct {
	FileMode FileModeTypeEnumEnum `json:"fileMode"`
	FilePath string               `json:"filePath"`
}

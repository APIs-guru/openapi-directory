package shared

type Location struct {
	FilePath            *string                      `json:"filePath"`
	FilePosition        *int64                       `json:"filePosition"`
	RelativeFileVersion *RelativeFileVersionEnumEnum `json:"relativeFileVersion"`
}

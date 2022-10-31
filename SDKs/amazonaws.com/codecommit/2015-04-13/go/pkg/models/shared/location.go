package shared



type Location struct {
    FilePath *string `json:"filePath,omitempty"`
    FilePosition *int64 `json:"filePosition,omitempty"`
    RelativeFileVersion *RelativeFileVersionEnumEnum `json:"relativeFileVersion,omitempty"`
    
}


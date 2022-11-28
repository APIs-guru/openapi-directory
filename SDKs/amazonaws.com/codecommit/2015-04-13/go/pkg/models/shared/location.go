package shared

// Location
// Returns information about the location of a change or comment in the comparison between two commits or a pull request.
type Location struct {
	FilePath            *string                      `json:"filePath,omitempty"`
	FilePosition        *int64                       `json:"filePosition,omitempty"`
	RelativeFileVersion *RelativeFileVersionEnumEnum `json:"relativeFileVersion,omitempty"`
}

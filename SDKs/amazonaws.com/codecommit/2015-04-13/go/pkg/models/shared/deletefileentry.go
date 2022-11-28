package shared

// DeleteFileEntry
// A file that is deleted as part of a commit.
type DeleteFileEntry struct {
	FilePath string `json:"filePath"`
}

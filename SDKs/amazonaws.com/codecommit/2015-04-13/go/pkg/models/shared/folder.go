package shared

// Folder
// Returns information about a folder in a repository.
type Folder struct {
	AbsolutePath *string `json:"absolutePath,omitempty"`
	RelativePath *string `json:"relativePath,omitempty"`
	TreeID       *string `json:"treeId,omitempty"`
}

package shared

// SubModule
// Returns information about a submodule reference in a repository folder.
type SubModule struct {
	AbsolutePath *string `json:"absolutePath,omitempty"`
	CommitID     *string `json:"commitId,omitempty"`
	RelativePath *string `json:"relativePath,omitempty"`
}

package shared

type SubModule struct {
	AbsolutePath *string `json:"absolutePath,omitempty"`
	CommitID     *string `json:"commitId,omitempty"`
	RelativePath *string `json:"relativePath,omitempty"`
}

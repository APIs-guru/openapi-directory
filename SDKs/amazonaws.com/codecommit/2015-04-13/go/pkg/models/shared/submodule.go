package shared

type SubModule struct {
	AbsolutePath *string `json:"absolutePath"`
	CommitID     *string `json:"commitId"`
	RelativePath *string `json:"relativePath"`
}

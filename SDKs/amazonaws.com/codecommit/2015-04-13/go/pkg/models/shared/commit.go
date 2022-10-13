package shared

type Commit struct {
	AdditionalData *string   `json:"additionalData"`
	Author         *UserInfo `json:"author"`
	CommitID       *string   `json:"commitId"`
	Committer      *UserInfo `json:"committer"`
	Message        *string   `json:"message"`
	Parents        []string  `json:"parents"`
	TreeID         *string   `json:"treeId"`
}

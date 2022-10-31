package shared



type Commit struct {
    AdditionalData *string `json:"additionalData,omitempty"`
    Author *UserInfo `json:"author,omitempty"`
    CommitID *string `json:"commitId,omitempty"`
    Committer *UserInfo `json:"committer,omitempty"`
    Message *string `json:"message,omitempty"`
    Parents []string `json:"parents,omitempty"`
    TreeID *string `json:"treeId,omitempty"`
    
}


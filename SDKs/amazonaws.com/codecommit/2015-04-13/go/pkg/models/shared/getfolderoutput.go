package shared



type GetFolderOutput struct {
    CommitID string `json:"commitId"`
    Files []File `json:"files,omitempty"`
    FolderPath string `json:"folderPath"`
    SubFolders []Folder `json:"subFolders,omitempty"`
    SubModules []SubModule `json:"subModules,omitempty"`
    SymbolicLinks []SymbolicLink `json:"symbolicLinks,omitempty"`
    TreeID *string `json:"treeId,omitempty"`
    
}


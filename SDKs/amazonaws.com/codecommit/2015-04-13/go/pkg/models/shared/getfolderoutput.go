package shared

type GetFolderOutput struct {
	CommitID      string         `json:"commitId"`
	Files         []File         `json:"files"`
	FolderPath    string         `json:"folderPath"`
	SubFolders    []Folder       `json:"subFolders"`
	SubModules    []SubModule    `json:"subModules"`
	SymbolicLinks []SymbolicLink `json:"symbolicLinks"`
	TreeID        *string        `json:"treeId"`
}

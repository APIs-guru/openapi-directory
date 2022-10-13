package shared

type Folder struct {
	AbsolutePath *string `json:"absolutePath"`
	RelativePath *string `json:"relativePath"`
	TreeID       *string `json:"treeId"`
}

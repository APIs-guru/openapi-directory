package shared



type Folder struct {
    AbsolutePath *string `json:"absolutePath,omitempty"`
    RelativePath *string `json:"relativePath,omitempty"`
    TreeID *string `json:"treeId,omitempty"`
    
}


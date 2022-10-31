package shared



type FileSection struct {
    ID *string `json:"id,omitempty"`
    
}

type File struct {
    Content *string `json:"content,omitempty"`
    ContentPath *string `json:"content_path,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Section *FileSection `json:"section,omitempty"`
    Size *int64 `json:"size,omitempty"`
    
}


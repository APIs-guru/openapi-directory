package shared



type Resource struct {
    ID *string `json:"id,omitempty"`
    ParentID *string `json:"parentId,omitempty"`
    Path *string `json:"path,omitempty"`
    PathPart *string `json:"pathPart,omitempty"`
    ResourceMethods map[string]Method `json:"resourceMethods,omitempty"`
    
}


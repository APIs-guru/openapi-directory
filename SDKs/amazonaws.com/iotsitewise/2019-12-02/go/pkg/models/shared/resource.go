package shared



type Resource struct {
    Portal *PortalResource `json:"portal,omitempty"`
    Project *ProjectResource `json:"project,omitempty"`
    
}


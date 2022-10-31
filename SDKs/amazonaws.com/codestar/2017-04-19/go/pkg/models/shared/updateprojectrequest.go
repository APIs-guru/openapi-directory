package shared



type UpdateProjectRequest struct {
    Description *string `json:"description,omitempty"`
    ID string `json:"id"`
    Name *string `json:"name,omitempty"`
    
}


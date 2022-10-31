package shared



type CreateApplicationRequest struct {
    Description *string `json:"description,omitempty"`
    Name string `json:"name"`
    
}


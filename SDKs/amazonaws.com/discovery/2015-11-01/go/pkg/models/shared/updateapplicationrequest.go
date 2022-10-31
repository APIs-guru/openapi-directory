package shared



type UpdateApplicationRequest struct {
    ConfigurationID string `json:"configurationId"`
    Description *string `json:"description,omitempty"`
    Name *string `json:"name,omitempty"`
    
}


package shared



type UpdateStudioInput struct {
    DefaultS3Location *string `json:"DefaultS3Location,omitempty"`
    Description *string `json:"Description,omitempty"`
    Name *string `json:"Name,omitempty"`
    StudioID string `json:"StudioId"`
    SubnetIds []string `json:"SubnetIds,omitempty"`
    
}


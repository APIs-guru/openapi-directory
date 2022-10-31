package shared



type UpdateWorkGroupInput struct {
    ConfigurationUpdates *WorkGroupConfigurationUpdates `json:"ConfigurationUpdates,omitempty"`
    Description *string `json:"Description,omitempty"`
    State *WorkGroupStateEnum `json:"State,omitempty"`
    WorkGroup string `json:"WorkGroup"`
    
}


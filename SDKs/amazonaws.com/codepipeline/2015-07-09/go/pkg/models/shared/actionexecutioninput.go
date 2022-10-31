package shared



type ActionExecutionInput struct {
    ActionTypeID *ActionTypeID `json:"actionTypeId,omitempty"`
    Configuration map[string]string `json:"configuration,omitempty"`
    InputArtifacts []ArtifactDetail `json:"inputArtifacts,omitempty"`
    Namespace *string `json:"namespace,omitempty"`
    Region *string `json:"region,omitempty"`
    ResolvedConfiguration map[string]string `json:"resolvedConfiguration,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    
}


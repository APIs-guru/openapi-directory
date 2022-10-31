package shared



type UpdateEnvironmentRequest struct {
    Description *string `json:"description,omitempty"`
    EnvironmentID string `json:"environmentId"`
    ManagedCredentialsAction *ManagedCredentialsActionEnum `json:"managedCredentialsAction,omitempty"`
    Name *string `json:"name,omitempty"`
    
}


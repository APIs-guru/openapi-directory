package shared



type RegisterApplicationRevisionInput struct {
    ApplicationName string `json:"applicationName"`
    Description *string `json:"description,omitempty"`
    Revision RevisionLocation `json:"revision"`
    
}


package shared



type ApplicationSummary struct {
    ApplicationCreationDate *int64 `json:"applicationCreationDate,omitempty"`
    ApplicationDescription *string `json:"applicationDescription,omitempty"`
    ApplicationID string `json:"applicationId"`
    ApplicationLastUpdateDate *int64 `json:"applicationLastUpdateDate,omitempty"`
    ApplicationName string `json:"applicationName"`
    ApplicationState *ApplicationStateEnum `json:"applicationState,omitempty"`
    ApplicationURL string `json:"applicationUrl"`
    
}


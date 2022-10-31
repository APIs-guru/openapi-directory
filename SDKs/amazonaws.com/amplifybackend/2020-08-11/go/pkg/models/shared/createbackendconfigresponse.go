package shared



type CreateBackendConfigResponse struct {
    AppID *string `json:"AppId,omitempty"`
    BackendEnvironmentName *string `json:"BackendEnvironmentName,omitempty"`
    JobID *string `json:"JobId,omitempty"`
    Status *string `json:"Status,omitempty"`
    
}


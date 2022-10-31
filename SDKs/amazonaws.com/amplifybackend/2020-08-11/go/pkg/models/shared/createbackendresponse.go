package shared



type CreateBackendResponse struct {
    AppID *string `json:"AppId,omitempty"`
    BackendEnvironmentName *string `json:"BackendEnvironmentName,omitempty"`
    Error *string `json:"Error,omitempty"`
    JobID *string `json:"JobId,omitempty"`
    Operation *string `json:"Operation,omitempty"`
    Status *string `json:"Status,omitempty"`
    
}


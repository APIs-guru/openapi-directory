package shared



type GetBackendResponse struct {
    AmplifyMetaConfig *string `json:"AmplifyMetaConfig,omitempty"`
    AppID *string `json:"AppId,omitempty"`
    AppName *string `json:"AppName,omitempty"`
    BackendEnvironmentList []string `json:"BackendEnvironmentList,omitempty"`
    BackendEnvironmentName *string `json:"BackendEnvironmentName,omitempty"`
    Error *string `json:"Error,omitempty"`
    
}


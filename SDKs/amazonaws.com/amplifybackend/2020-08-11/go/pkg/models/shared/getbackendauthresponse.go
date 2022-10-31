package shared



type GetBackendAuthResponse struct {
    AppID *string `json:"AppId,omitempty"`
    BackendEnvironmentName *string `json:"BackendEnvironmentName,omitempty"`
    Error *string `json:"Error,omitempty"`
    ResourceConfig *CreateBackendAuthResourceConfig `json:"ResourceConfig,omitempty"`
    ResourceName *string `json:"ResourceName,omitempty"`
    
}


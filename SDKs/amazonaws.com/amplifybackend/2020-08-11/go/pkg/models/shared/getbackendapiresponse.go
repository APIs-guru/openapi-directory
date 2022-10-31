package shared



type GetBackendAPIResponse struct {
    AppID *string `json:"AppId,omitempty"`
    BackendEnvironmentName *string `json:"BackendEnvironmentName,omitempty"`
    Error *string `json:"Error,omitempty"`
    ResourceConfig *BackendAPIResourceConfig `json:"ResourceConfig,omitempty"`
    ResourceName *string `json:"ResourceName,omitempty"`
    
}


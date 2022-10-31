package shared



type UpdateBackendConfigResponse struct {
    AppID *string `json:"AppId,omitempty"`
    BackendManagerAppID *string `json:"BackendManagerAppId,omitempty"`
    Error *string `json:"Error,omitempty"`
    LoginAuthConfig *LoginAuthConfigReqObj `json:"LoginAuthConfig,omitempty"`
    
}


package shared

type UpdateBackendConfigResponse struct {
	AppID               *string                `json:"AppId"`
	BackendManagerAppID *string                `json:"BackendManagerAppId"`
	Error               *string                `json:"Error"`
	LoginAuthConfig     *LoginAuthConfigReqObj `json:"LoginAuthConfig"`
}

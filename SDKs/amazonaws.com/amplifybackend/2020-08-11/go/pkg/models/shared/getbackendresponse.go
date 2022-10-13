package shared

type GetBackendResponse struct {
	AmplifyMetaConfig      *string  `json:"AmplifyMetaConfig"`
	AppID                  *string  `json:"AppId"`
	AppName                *string  `json:"AppName"`
	BackendEnvironmentList []string `json:"BackendEnvironmentList"`
	BackendEnvironmentName *string  `json:"BackendEnvironmentName"`
	Error                  *string  `json:"Error"`
}

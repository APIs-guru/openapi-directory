package shared

type GetBackendAuthResponse struct {
	AppID                  *string                          `json:"AppId"`
	BackendEnvironmentName *string                          `json:"BackendEnvironmentName"`
	Error                  *string                          `json:"Error"`
	ResourceConfig         *CreateBackendAuthResourceConfig `json:"ResourceConfig"`
	ResourceName           *string                          `json:"ResourceName"`
}

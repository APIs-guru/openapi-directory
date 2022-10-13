package shared

type GetBackendAPIResponse struct {
	AppID                  *string                   `json:"AppId"`
	BackendEnvironmentName *string                   `json:"BackendEnvironmentName"`
	Error                  *string                   `json:"Error"`
	ResourceConfig         *BackendAPIResourceConfig `json:"ResourceConfig"`
	ResourceName           *string                   `json:"ResourceName"`
}

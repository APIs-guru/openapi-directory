package shared

type CloneBackendResponse struct {
	AppID                  *string `json:"AppId"`
	BackendEnvironmentName *string `json:"BackendEnvironmentName"`
	Error                  *string `json:"Error"`
	JobID                  *string `json:"JobId"`
	Operation              *string `json:"Operation"`
	Status                 *string `json:"Status"`
}

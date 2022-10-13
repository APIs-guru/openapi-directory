package shared

type CreateBackendConfigResponse struct {
	AppID                  *string `json:"AppId"`
	BackendEnvironmentName *string `json:"BackendEnvironmentName"`
	JobID                  *string `json:"JobId"`
	Status                 *string `json:"Status"`
}

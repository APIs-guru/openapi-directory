package shared

type GetBackendJobResponse struct {
	AppID                  *string `json:"AppId"`
	BackendEnvironmentName *string `json:"BackendEnvironmentName"`
	CreateTime             *string `json:"CreateTime"`
	Error                  *string `json:"Error"`
	JobID                  *string `json:"JobId"`
	Operation              *string `json:"Operation"`
	Status                 *string `json:"Status"`
	UpdateTime             *string `json:"UpdateTime"`
}

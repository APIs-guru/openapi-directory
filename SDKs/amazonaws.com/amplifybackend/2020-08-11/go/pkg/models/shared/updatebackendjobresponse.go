package shared

type UpdateBackendJobResponse struct {
	AppID                  *string `json:"AppId,omitempty"`
	BackendEnvironmentName *string `json:"BackendEnvironmentName,omitempty"`
	CreateTime             *string `json:"CreateTime,omitempty"`
	Error                  *string `json:"Error,omitempty"`
	JobID                  *string `json:"JobId,omitempty"`
	Operation              *string `json:"Operation,omitempty"`
	Status                 *string `json:"Status,omitempty"`
	UpdateTime             *string `json:"UpdateTime,omitempty"`
}

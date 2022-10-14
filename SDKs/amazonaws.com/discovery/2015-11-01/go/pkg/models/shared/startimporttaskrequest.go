package shared

type StartImportTaskRequest struct {
	ClientRequestToken *string `json:"clientRequestToken,omitempty"`
	ImportURL          string  `json:"importUrl"`
	Name               string  `json:"name"`
}

package shared

type StartImportTaskRequest struct {
	ClientRequestToken *string `json:"clientRequestToken"`
	ImportURL          string  `json:"importUrl"`
	Name               string  `json:"name"`
}

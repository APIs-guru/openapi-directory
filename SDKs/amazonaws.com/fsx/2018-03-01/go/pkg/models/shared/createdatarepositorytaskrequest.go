package shared

type CreateDataRepositoryTaskRequest struct {
	ClientRequestToken *string                    `json:"ClientRequestToken"`
	FileSystemID       string                     `json:"FileSystemId"`
	Paths              []string                   `json:"Paths"`
	Report             CompletionReport           `json:"Report"`
	Tags               []Tag                      `json:"Tags"`
	Type               DataRepositoryTaskTypeEnum `json:"Type"`
}

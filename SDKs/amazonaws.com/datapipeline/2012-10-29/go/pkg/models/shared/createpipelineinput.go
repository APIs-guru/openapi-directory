package shared

type CreatePipelineInput struct {
	Description *string `json:"description"`
	Name        string  `json:"name"`
	Tags        []Tag   `json:"tags"`
	UniqueID    string  `json:"uniqueId"`
}

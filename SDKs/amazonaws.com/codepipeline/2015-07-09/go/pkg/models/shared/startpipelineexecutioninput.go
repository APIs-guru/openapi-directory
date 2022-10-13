package shared

type StartPipelineExecutionInput struct {
	ClientRequestToken *string `json:"clientRequestToken"`
	Name               string  `json:"name"`
}

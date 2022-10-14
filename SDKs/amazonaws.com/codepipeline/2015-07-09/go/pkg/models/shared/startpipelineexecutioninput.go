package shared

type StartPipelineExecutionInput struct {
	ClientRequestToken *string `json:"clientRequestToken,omitempty"`
	Name               string  `json:"name"`
}

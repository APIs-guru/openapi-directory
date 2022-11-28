package shared

// StartPipelineExecutionInput
// Represents the input of a <code>StartPipelineExecution</code> action.
type StartPipelineExecutionInput struct {
	ClientRequestToken *string `json:"clientRequestToken,omitempty"`
	Name               string  `json:"name"`
}

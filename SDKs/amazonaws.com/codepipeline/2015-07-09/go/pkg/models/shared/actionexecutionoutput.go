package shared

// ActionExecutionOutput
// Output details listed for an action execution, such as the action execution result.
type ActionExecutionOutput struct {
	ExecutionResult *ActionExecutionResult `json:"executionResult,omitempty"`
	OutputArtifacts []ArtifactDetail       `json:"outputArtifacts,omitempty"`
	OutputVariables map[string]string      `json:"outputVariables,omitempty"`
}

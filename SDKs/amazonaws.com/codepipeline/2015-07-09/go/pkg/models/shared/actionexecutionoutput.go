package shared

type ActionExecutionOutput struct {
	ExecutionResult *ActionExecutionResult `json:"executionResult,omitempty"`
	OutputArtifacts []ArtifactDetail       `json:"outputArtifacts,omitempty"`
	OutputVariables map[string]string      `json:"outputVariables,omitempty"`
}

package shared

type ActionExecutionOutput struct {
	ExecutionResult *ActionExecutionResult `json:"executionResult"`
	OutputArtifacts []ArtifactDetail       `json:"outputArtifacts"`
	OutputVariables map[string]string      `json:"outputVariables"`
}

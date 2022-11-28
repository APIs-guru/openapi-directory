package shared

// CanarySettings
// Configuration settings of a canary deployment.
type CanarySettings struct {
	DeploymentID           *string           `json:"deploymentId,omitempty"`
	PercentTraffic         *float64          `json:"percentTraffic,omitempty"`
	StageVariableOverrides map[string]string `json:"stageVariableOverrides,omitempty"`
	UseStageCache          *bool             `json:"useStageCache,omitempty"`
}

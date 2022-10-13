package shared

type CanarySettings struct {
	DeploymentID           *string           `json:"deploymentId"`
	PercentTraffic         *float64          `json:"percentTraffic"`
	StageVariableOverrides map[string]string `json:"stageVariableOverrides"`
	UseStageCache          *bool             `json:"useStageCache"`
}

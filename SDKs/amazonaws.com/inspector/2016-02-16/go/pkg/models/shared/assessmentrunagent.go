package shared

type AssessmentRunAgent struct {
	AgentHealth        AgentHealthEnum     `json:"agentHealth"`
	AgentHealthCode    AgentHealthCodeEnum `json:"agentHealthCode"`
	AgentHealthDetails *string             `json:"agentHealthDetails"`
	AgentID            string              `json:"agentId"`
	AssessmentRunArn   string              `json:"assessmentRunArn"`
	AutoScalingGroup   *string             `json:"autoScalingGroup"`
	TelemetryMetadata  []TelemetryMetadata `json:"telemetryMetadata"`
}

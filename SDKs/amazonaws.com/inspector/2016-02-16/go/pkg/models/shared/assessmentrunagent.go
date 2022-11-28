package shared

// AssessmentRunAgent
// Contains information about an Amazon Inspector agent. This data type is used as a response element in the <a>ListAssessmentRunAgents</a> action.
type AssessmentRunAgent struct {
	AgentHealth        AgentHealthEnum     `json:"agentHealth"`
	AgentHealthCode    AgentHealthCodeEnum `json:"agentHealthCode"`
	AgentHealthDetails *string             `json:"agentHealthDetails,omitempty"`
	AgentID            string              `json:"agentId"`
	AssessmentRunArn   string              `json:"assessmentRunArn"`
	AutoScalingGroup   *string             `json:"autoScalingGroup,omitempty"`
	TelemetryMetadata  []TelemetryMetadata `json:"telemetryMetadata"`
}

package shared

type GetDiscoverySummaryResponse struct {
	AgentSummary                *CustomerAgentInfo     `json:"agentSummary,omitempty"`
	Applications                *int64                 `json:"applications,omitempty"`
	ConnectorSummary            *CustomerConnectorInfo `json:"connectorSummary,omitempty"`
	Servers                     *int64                 `json:"servers,omitempty"`
	ServersMappedToApplications *int64                 `json:"serversMappedToApplications,omitempty"`
	ServersMappedtoTags         *int64                 `json:"serversMappedtoTags,omitempty"`
}

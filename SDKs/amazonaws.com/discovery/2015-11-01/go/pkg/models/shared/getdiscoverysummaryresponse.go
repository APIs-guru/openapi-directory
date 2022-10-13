package shared

type GetDiscoverySummaryResponse struct {
	AgentSummary                *CustomerAgentInfo     `json:"agentSummary"`
	Applications                *int64                 `json:"applications"`
	ConnectorSummary            *CustomerConnectorInfo `json:"connectorSummary"`
	Servers                     *int64                 `json:"servers"`
	ServersMappedToApplications *int64                 `json:"serversMappedToApplications"`
	ServersMappedtoTags         *int64                 `json:"serversMappedtoTags"`
}

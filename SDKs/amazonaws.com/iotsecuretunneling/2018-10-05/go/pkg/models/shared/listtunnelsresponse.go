package shared

type ListTunnelsResponse struct {
	NextToken       *string         `json:"nextToken"`
	TunnelSummaries []TunnelSummary `json:"tunnelSummaries"`
}

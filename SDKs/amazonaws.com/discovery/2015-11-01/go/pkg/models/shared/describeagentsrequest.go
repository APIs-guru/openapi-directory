package shared

type DescribeAgentsRequest struct {
	AgentIds   []string `json:"agentIds"`
	Filters    []Filter `json:"filters"`
	MaxResults *int64   `json:"maxResults"`
	NextToken  *string  `json:"nextToken"`
}

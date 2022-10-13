package shared

type DescribeAgentsResponse struct {
	AgentsInfo []AgentInfo `json:"agentsInfo"`
	NextToken  *string     `json:"nextToken"`
}

package shared



type DescribeAgentsResponse struct {
    AgentsInfo []AgentInfo `json:"agentsInfo,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}


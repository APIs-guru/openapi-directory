package shared



type DescribeAgentsRequest struct {
    AgentIds []string `json:"agentIds,omitempty"`
    Filters []Filter `json:"filters,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}


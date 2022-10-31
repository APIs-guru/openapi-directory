package shared



type ListAgentsResponse struct {
    Agents []AgentListEntry `json:"Agents,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}


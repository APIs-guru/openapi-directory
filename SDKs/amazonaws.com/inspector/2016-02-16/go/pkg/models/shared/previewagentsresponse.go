package shared



type PreviewAgentsResponse struct {
    AgentPreviews []AgentPreview `json:"agentPreviews"`
    NextToken *string `json:"nextToken,omitempty"`
    
}


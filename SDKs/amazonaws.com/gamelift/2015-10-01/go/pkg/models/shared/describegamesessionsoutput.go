package shared



type DescribeGameSessionsOutput struct {
    GameSessions []GameSession `json:"GameSessions,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}


package shared

// DescribeGameSessionsOutput
// Represents the returned data in response to a request operation.
type DescribeGameSessionsOutput struct {
	GameSessions []GameSession `json:"GameSessions,omitempty"`
	NextToken    *string       `json:"NextToken,omitempty"`
}

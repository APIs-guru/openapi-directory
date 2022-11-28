package shared

// SearchGameSessionsOutput
// Represents the returned data in response to a request operation.
type SearchGameSessionsOutput struct {
	GameSessions []GameSession `json:"GameSessions,omitempty"`
	NextToken    *string       `json:"NextToken,omitempty"`
}

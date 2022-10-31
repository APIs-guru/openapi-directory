package shared

type SearchGameSessionsOutput struct {
	GameSessions []GameSession `json:"GameSessions,omitempty"`
	NextToken    *string       `json:"NextToken,omitempty"`
}

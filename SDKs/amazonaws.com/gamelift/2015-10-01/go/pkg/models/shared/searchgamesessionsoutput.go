package shared

type SearchGameSessionsOutput struct {
	GameSessions []GameSession `json:"GameSessions"`
	NextToken    *string       `json:"NextToken"`
}

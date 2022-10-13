package shared

type DescribeGameSessionsOutput struct {
	GameSessions []GameSession `json:"GameSessions"`
	NextToken    *string       `json:"NextToken"`
}

package shared

type DescribePlayerSessionsOutput struct {
	NextToken      *string         `json:"NextToken"`
	PlayerSessions []PlayerSession `json:"PlayerSessions"`
}

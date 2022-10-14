package shared

type DescribePlayerSessionsOutput struct {
	NextToken      *string         `json:"NextToken,omitempty"`
	PlayerSessions []PlayerSession `json:"PlayerSessions,omitempty"`
}

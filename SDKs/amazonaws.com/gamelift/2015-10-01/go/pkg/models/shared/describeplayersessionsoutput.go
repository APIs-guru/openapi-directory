package shared

// DescribePlayerSessionsOutput
// Represents the returned data in response to a request operation.
type DescribePlayerSessionsOutput struct {
	NextToken      *string         `json:"NextToken,omitempty"`
	PlayerSessions []PlayerSession `json:"PlayerSessions,omitempty"`
}

package shared

// DescribeGameSessionDetailsOutput
// Represents the returned data in response to a request operation.
type DescribeGameSessionDetailsOutput struct {
	GameSessionDetails []GameSessionDetail `json:"GameSessionDetails,omitempty"`
	NextToken          *string             `json:"NextToken,omitempty"`
}

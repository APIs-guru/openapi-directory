package shared

type DescribeGameSessionDetailsOutput struct {
	GameSessionDetails []GameSessionDetail `json:"GameSessionDetails,omitempty"`
	NextToken          *string             `json:"NextToken,omitempty"`
}

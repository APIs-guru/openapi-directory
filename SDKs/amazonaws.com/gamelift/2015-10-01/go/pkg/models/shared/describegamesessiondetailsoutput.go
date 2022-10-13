package shared

type DescribeGameSessionDetailsOutput struct {
	GameSessionDetails []GameSessionDetail `json:"GameSessionDetails"`
	NextToken          *string             `json:"NextToken"`
}

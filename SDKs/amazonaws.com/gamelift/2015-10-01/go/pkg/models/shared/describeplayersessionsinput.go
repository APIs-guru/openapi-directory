package shared

type DescribePlayerSessionsInput struct {
	GameSessionID             *string `json:"GameSessionId"`
	Limit                     *int64  `json:"Limit"`
	NextToken                 *string `json:"NextToken"`
	PlayerID                  *string `json:"PlayerId"`
	PlayerSessionID           *string `json:"PlayerSessionId"`
	PlayerSessionStatusFilter *string `json:"PlayerSessionStatusFilter"`
}

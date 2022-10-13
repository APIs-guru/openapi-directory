package shared

type DescribeGameSessionDetailsInput struct {
	AliasID       *string `json:"AliasId"`
	FleetID       *string `json:"FleetId"`
	GameSessionID *string `json:"GameSessionId"`
	Limit         *int64  `json:"Limit"`
	Location      *string `json:"Location"`
	NextToken     *string `json:"NextToken"`
	StatusFilter  *string `json:"StatusFilter"`
}

package shared

type SearchGameSessionsInput struct {
	AliasID          *string `json:"AliasId"`
	FilterExpression *string `json:"FilterExpression"`
	FleetID          *string `json:"FleetId"`
	Limit            *int64  `json:"Limit"`
	Location         *string `json:"Location"`
	NextToken        *string `json:"NextToken"`
	SortExpression   *string `json:"SortExpression"`
}

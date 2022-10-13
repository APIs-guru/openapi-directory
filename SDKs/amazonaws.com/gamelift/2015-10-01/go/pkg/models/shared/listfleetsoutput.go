package shared

type ListFleetsOutput struct {
	FleetIds  []string `json:"FleetIds"`
	NextToken *string  `json:"NextToken"`
}

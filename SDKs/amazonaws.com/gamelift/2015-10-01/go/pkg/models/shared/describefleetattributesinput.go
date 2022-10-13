package shared

type DescribeFleetAttributesInput struct {
	FleetIds  []string `json:"FleetIds"`
	Limit     *int64   `json:"Limit"`
	NextToken *string  `json:"NextToken"`
}

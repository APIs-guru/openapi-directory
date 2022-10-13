package shared

type DescribeFleetAttributesOutput struct {
	FleetAttributes []FleetAttributes `json:"FleetAttributes"`
	NextToken       *string           `json:"NextToken"`
}

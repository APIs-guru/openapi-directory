package shared

type DescribeFleetAttributesOutput struct {
	FleetAttributes []FleetAttributes `json:"FleetAttributes,omitempty"`
	NextToken       *string           `json:"NextToken,omitempty"`
}

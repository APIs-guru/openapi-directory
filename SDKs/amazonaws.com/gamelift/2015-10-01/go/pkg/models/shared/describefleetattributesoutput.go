package shared

// DescribeFleetAttributesOutput
// Represents the returned data in response to a request operation.
type DescribeFleetAttributesOutput struct {
	FleetAttributes []FleetAttributes `json:"FleetAttributes,omitempty"`
	NextToken       *string           `json:"NextToken,omitempty"`
}

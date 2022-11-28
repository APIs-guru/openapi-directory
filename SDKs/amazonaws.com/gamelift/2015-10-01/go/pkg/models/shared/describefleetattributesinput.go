package shared

// DescribeFleetAttributesInput
// Represents the input for a request operation.
type DescribeFleetAttributesInput struct {
	FleetIds  []string `json:"FleetIds,omitempty"`
	Limit     *int64   `json:"Limit,omitempty"`
	NextToken *string  `json:"NextToken,omitempty"`
}

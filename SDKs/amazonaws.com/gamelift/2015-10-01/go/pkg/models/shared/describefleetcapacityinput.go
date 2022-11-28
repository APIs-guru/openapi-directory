package shared

// DescribeFleetCapacityInput
// Represents the input for a request operation.
type DescribeFleetCapacityInput struct {
	FleetIds  []string `json:"FleetIds,omitempty"`
	Limit     *int64   `json:"Limit,omitempty"`
	NextToken *string  `json:"NextToken,omitempty"`
}

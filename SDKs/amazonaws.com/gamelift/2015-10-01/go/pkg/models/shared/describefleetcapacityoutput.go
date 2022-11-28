package shared

// DescribeFleetCapacityOutput
// Represents the returned data in response to a request operation.
type DescribeFleetCapacityOutput struct {
	FleetCapacity []FleetCapacity `json:"FleetCapacity,omitempty"`
	NextToken     *string         `json:"NextToken,omitempty"`
}

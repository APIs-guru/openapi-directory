package shared

// DescribeFleetUtilizationOutput
// Represents the returned data in response to a request operation.
type DescribeFleetUtilizationOutput struct {
	FleetUtilization []FleetUtilization `json:"FleetUtilization,omitempty"`
	NextToken        *string            `json:"NextToken,omitempty"`
}

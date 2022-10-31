package shared

type DescribeFleetUtilizationOutput struct {
	FleetUtilization []FleetUtilization `json:"FleetUtilization,omitempty"`
	NextToken        *string            `json:"NextToken,omitempty"`
}

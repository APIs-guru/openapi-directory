package shared

type DescribeFleetUtilizationOutput struct {
	FleetUtilization []FleetUtilization `json:"FleetUtilization"`
	NextToken        *string            `json:"NextToken"`
}

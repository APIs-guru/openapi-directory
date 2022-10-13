package shared

type DescribeFleetCapacityOutput struct {
	FleetCapacity []FleetCapacity `json:"FleetCapacity"`
	NextToken     *string         `json:"NextToken"`
}

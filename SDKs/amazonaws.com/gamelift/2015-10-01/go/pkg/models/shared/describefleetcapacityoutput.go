package shared



type DescribeFleetCapacityOutput struct {
    FleetCapacity []FleetCapacity `json:"FleetCapacity,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}


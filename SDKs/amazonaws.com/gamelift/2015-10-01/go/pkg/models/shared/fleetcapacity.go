package shared

// FleetCapacity
// <p>Current resource capacity settings in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region. </p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetCapacity</a> | <a>DescribeFleetLocationCapacity</a> | <a>UpdateFleetCapacity</a> </p>
type FleetCapacity struct {
	FleetArn       *string              `json:"FleetArn,omitempty"`
	FleetID        *string              `json:"FleetId,omitempty"`
	InstanceCounts *Ec2InstanceCounts   `json:"InstanceCounts,omitempty"`
	InstanceType   *Ec2InstanceTypeEnum `json:"InstanceType,omitempty"`
	Location       *string              `json:"Location,omitempty"`
}

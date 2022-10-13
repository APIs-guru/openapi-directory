package shared

type FleetCapacity struct {
	FleetArn       *string              `json:"FleetArn"`
	FleetID        *string              `json:"FleetId"`
	InstanceCounts *Ec2InstanceCounts   `json:"InstanceCounts"`
	InstanceType   *Ec2InstanceTypeEnum `json:"InstanceType"`
	Location       *string              `json:"Location"`
}

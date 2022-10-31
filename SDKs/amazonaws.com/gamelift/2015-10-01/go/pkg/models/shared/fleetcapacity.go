package shared



type FleetCapacity struct {
    FleetArn *string `json:"FleetArn,omitempty"`
    FleetID *string `json:"FleetId,omitempty"`
    InstanceCounts *Ec2InstanceCounts `json:"InstanceCounts,omitempty"`
    InstanceType *Ec2InstanceTypeEnum `json:"InstanceType,omitempty"`
    Location *string `json:"Location,omitempty"`
    
}


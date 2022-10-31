package shared



type InstanceGroupModifyConfig struct {
    Configurations []Configuration `json:"Configurations,omitempty"`
    Ec2InstanceIdsToTerminate []string `json:"EC2InstanceIdsToTerminate,omitempty"`
    InstanceCount *int64 `json:"InstanceCount,omitempty"`
    InstanceGroupID string `json:"InstanceGroupId"`
    ShrinkPolicy *ShrinkPolicy `json:"ShrinkPolicy,omitempty"`
    
}


package shared



type InstanceGroupConfig struct {
    AutoScalingPolicy *AutoScalingPolicy `json:"AutoScalingPolicy,omitempty"`
    BidPrice *string `json:"BidPrice,omitempty"`
    Configurations []Configuration `json:"Configurations,omitempty"`
    CustomAmiID *string `json:"CustomAmiId,omitempty"`
    EbsConfiguration *EbsConfiguration `json:"EbsConfiguration,omitempty"`
    InstanceCount int64 `json:"InstanceCount"`
    InstanceRole InstanceRoleTypeEnum `json:"InstanceRole"`
    InstanceType string `json:"InstanceType"`
    Market *MarketTypeEnum `json:"Market,omitempty"`
    Name *string `json:"Name,omitempty"`
    
}


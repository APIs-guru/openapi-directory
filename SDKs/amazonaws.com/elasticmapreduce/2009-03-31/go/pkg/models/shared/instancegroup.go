package shared

type InstanceGroup struct {
	AutoScalingPolicy                            *AutoScalingPolicyDescription `json:"AutoScalingPolicy"`
	BidPrice                                     *string                       `json:"BidPrice"`
	Configurations                               []Configuration               `json:"Configurations"`
	ConfigurationsVersion                        *int64                        `json:"ConfigurationsVersion"`
	CustomAmiID                                  *string                       `json:"CustomAmiId"`
	EbsBlockDevices                              []EbsBlockDevice              `json:"EbsBlockDevices"`
	EbsOptimized                                 *bool                         `json:"EbsOptimized"`
	ID                                           *string                       `json:"Id"`
	InstanceGroupType                            *InstanceGroupTypeEnum        `json:"InstanceGroupType"`
	InstanceType                                 *string                       `json:"InstanceType"`
	LastSuccessfullyAppliedConfigurations        []Configuration               `json:"LastSuccessfullyAppliedConfigurations"`
	LastSuccessfullyAppliedConfigurationsVersion *int64                        `json:"LastSuccessfullyAppliedConfigurationsVersion"`
	Market                                       *MarketTypeEnum               `json:"Market"`
	Name                                         *string                       `json:"Name"`
	RequestedInstanceCount                       *int64                        `json:"RequestedInstanceCount"`
	RunningInstanceCount                         *int64                        `json:"RunningInstanceCount"`
	ShrinkPolicy                                 *ShrinkPolicy                 `json:"ShrinkPolicy"`
	Status                                       *InstanceGroupStatus          `json:"Status"`
}

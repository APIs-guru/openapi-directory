package shared

// InstanceGroup
// This entity represents an instance group, which is a group of instances that have common purpose. For example, CORE instance group is used for HDFS.
type InstanceGroup struct {
	AutoScalingPolicy                            *AutoScalingPolicyDescription `json:"AutoScalingPolicy,omitempty"`
	BidPrice                                     *string                       `json:"BidPrice,omitempty"`
	Configurations                               []Configuration               `json:"Configurations,omitempty"`
	ConfigurationsVersion                        *int64                        `json:"ConfigurationsVersion,omitempty"`
	CustomAmiID                                  *string                       `json:"CustomAmiId,omitempty"`
	EbsBlockDevices                              []EbsBlockDevice              `json:"EbsBlockDevices,omitempty"`
	EbsOptimized                                 *bool                         `json:"EbsOptimized,omitempty"`
	ID                                           *string                       `json:"Id,omitempty"`
	InstanceGroupType                            *InstanceGroupTypeEnum        `json:"InstanceGroupType,omitempty"`
	InstanceType                                 *string                       `json:"InstanceType,omitempty"`
	LastSuccessfullyAppliedConfigurations        []Configuration               `json:"LastSuccessfullyAppliedConfigurations,omitempty"`
	LastSuccessfullyAppliedConfigurationsVersion *int64                        `json:"LastSuccessfullyAppliedConfigurationsVersion,omitempty"`
	Market                                       *MarketTypeEnum               `json:"Market,omitempty"`
	Name                                         *string                       `json:"Name,omitempty"`
	RequestedInstanceCount                       *int64                        `json:"RequestedInstanceCount,omitempty"`
	RunningInstanceCount                         *int64                        `json:"RunningInstanceCount,omitempty"`
	ShrinkPolicy                                 *ShrinkPolicy                 `json:"ShrinkPolicy,omitempty"`
	Status                                       *InstanceGroupStatus          `json:"Status,omitempty"`
}

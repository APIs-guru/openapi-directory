package shared

type InstanceGroupConfig struct {
	AutoScalingPolicy *AutoScalingPolicy   `json:"AutoScalingPolicy"`
	BidPrice          *string              `json:"BidPrice"`
	Configurations    []Configuration      `json:"Configurations"`
	CustomAmiID       *string              `json:"CustomAmiId"`
	EbsConfiguration  *EbsConfiguration    `json:"EbsConfiguration"`
	InstanceCount     int64                `json:"InstanceCount"`
	InstanceRole      InstanceRoleTypeEnum `json:"InstanceRole"`
	InstanceType      string               `json:"InstanceType"`
	Market            *MarketTypeEnum      `json:"Market"`
	Name              *string              `json:"Name"`
}

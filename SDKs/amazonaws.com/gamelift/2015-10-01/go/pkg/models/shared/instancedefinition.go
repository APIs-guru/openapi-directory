package shared

type InstanceDefinition struct {
	InstanceType     GameServerGroupInstanceTypeEnum `json:"InstanceType"`
	WeightedCapacity *string                         `json:"WeightedCapacity"`
}

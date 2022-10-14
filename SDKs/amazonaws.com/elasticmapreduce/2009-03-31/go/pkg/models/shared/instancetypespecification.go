package shared

type InstanceTypeSpecification struct {
	BidPrice                            *string          `json:"BidPrice,omitempty"`
	BidPriceAsPercentageOfOnDemandPrice *float64         `json:"BidPriceAsPercentageOfOnDemandPrice,omitempty"`
	Configurations                      []Configuration  `json:"Configurations,omitempty"`
	CustomAmiID                         *string          `json:"CustomAmiId,omitempty"`
	EbsBlockDevices                     []EbsBlockDevice `json:"EbsBlockDevices,omitempty"`
	EbsOptimized                        *bool            `json:"EbsOptimized,omitempty"`
	InstanceType                        *string          `json:"InstanceType,omitempty"`
	WeightedCapacity                    *int64           `json:"WeightedCapacity,omitempty"`
}

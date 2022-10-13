package shared

type InstanceTypeSpecification struct {
	BidPrice                            *string          `json:"BidPrice"`
	BidPriceAsPercentageOfOnDemandPrice *float64         `json:"BidPriceAsPercentageOfOnDemandPrice"`
	Configurations                      []Configuration  `json:"Configurations"`
	CustomAmiID                         *string          `json:"CustomAmiId"`
	EbsBlockDevices                     []EbsBlockDevice `json:"EbsBlockDevices"`
	EbsOptimized                        *bool            `json:"EbsOptimized"`
	InstanceType                        *string          `json:"InstanceType"`
	WeightedCapacity                    *int64           `json:"WeightedCapacity"`
}

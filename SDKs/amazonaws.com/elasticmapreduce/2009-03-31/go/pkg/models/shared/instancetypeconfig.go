package shared

type InstanceTypeConfig struct {
	BidPrice                            *string           `json:"BidPrice,omitempty"`
	BidPriceAsPercentageOfOnDemandPrice *float64          `json:"BidPriceAsPercentageOfOnDemandPrice,omitempty"`
	Configurations                      []Configuration   `json:"Configurations,omitempty"`
	CustomAmiID                         *string           `json:"CustomAmiId,omitempty"`
	EbsConfiguration                    *EbsConfiguration `json:"EbsConfiguration,omitempty"`
	InstanceType                        string            `json:"InstanceType"`
	WeightedCapacity                    *int64            `json:"WeightedCapacity,omitempty"`
}

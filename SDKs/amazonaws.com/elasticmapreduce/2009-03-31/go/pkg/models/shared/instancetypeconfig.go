package shared

type InstanceTypeConfig struct {
	BidPrice                            *string           `json:"BidPrice"`
	BidPriceAsPercentageOfOnDemandPrice *float64          `json:"BidPriceAsPercentageOfOnDemandPrice"`
	Configurations                      []Configuration   `json:"Configurations"`
	CustomAmiID                         *string           `json:"CustomAmiId"`
	EbsConfiguration                    *EbsConfiguration `json:"EbsConfiguration"`
	InstanceType                        string            `json:"InstanceType"`
	WeightedCapacity                    *int64            `json:"WeightedCapacity"`
}

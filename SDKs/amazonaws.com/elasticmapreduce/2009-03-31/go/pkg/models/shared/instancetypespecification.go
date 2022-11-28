package shared

// InstanceTypeSpecification
// <p>The configuration specification for each instance type in an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
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

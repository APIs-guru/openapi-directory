package shared

// InstanceTypeConfig
// <p>An instance type configuration for each instance type in an instance fleet, which determines the EC2 instances Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities. When you use an allocation strategy, you can include a maximum of 30 instance type configurations for a fleet. For more information about how to use an allocation strategy, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html">Configure Instance Fleets</a>. Without an allocation strategy, you may specify a maximum of five instance type configurations for a fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
type InstanceTypeConfig struct {
	BidPrice                            *string           `json:"BidPrice,omitempty"`
	BidPriceAsPercentageOfOnDemandPrice *float64          `json:"BidPriceAsPercentageOfOnDemandPrice,omitempty"`
	Configurations                      []Configuration   `json:"Configurations,omitempty"`
	CustomAmiID                         *string           `json:"CustomAmiId,omitempty"`
	EbsConfiguration                    *EbsConfiguration `json:"EbsConfiguration,omitempty"`
	InstanceType                        string            `json:"InstanceType"`
	WeightedCapacity                    *int64            `json:"WeightedCapacity,omitempty"`
}

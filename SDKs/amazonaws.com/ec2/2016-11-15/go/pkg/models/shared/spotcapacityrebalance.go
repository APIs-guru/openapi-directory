package shared

// SpotCapacityRebalance
// The Spot Instance replacement strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an elevated risk of being interrupted. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-configuration-strategies.html#spot-fleet-capacity-rebalance">Capacity rebalancing</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.
type SpotCapacityRebalance struct {
	ReplacementStrategy *ReplacementStrategyEnum
}

package shared

// FleetSpotCapacityRebalance
// The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an elevated risk of being interrupted.
type FleetSpotCapacityRebalance struct {
	ReplacementStrategy *FleetReplacementStrategyEnum
}

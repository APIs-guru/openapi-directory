package shared

// FleetSpotMaintenanceStrategies
// The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.
type FleetSpotMaintenanceStrategies struct {
	CapacityRebalance *FleetSpotCapacityRebalance
}

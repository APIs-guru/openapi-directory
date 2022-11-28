package shared

// SpotMaintenanceStrategies
// The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.
type SpotMaintenanceStrategies struct {
	CapacityRebalance *SpotCapacityRebalance
}

package shared

// OnDemandCapacityReservationOptions
// Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.
type OnDemandCapacityReservationOptions struct {
	CapacityReservationPreference       *OnDemandCapacityReservationPreferenceEnum    `json:"CapacityReservationPreference,omitempty"`
	CapacityReservationResourceGroupArn *string                                       `json:"CapacityReservationResourceGroupArn,omitempty"`
	UsageStrategy                       *OnDemandCapacityReservationUsageStrategyEnum `json:"UsageStrategy,omitempty"`
}

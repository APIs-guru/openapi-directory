package shared

type OnDemandCapacityReservationOptions struct {
	CapacityReservationPreference       *OnDemandCapacityReservationPreferenceEnum    `json:"CapacityReservationPreference"`
	CapacityReservationResourceGroupArn *string                                       `json:"CapacityReservationResourceGroupArn"`
	UsageStrategy                       *OnDemandCapacityReservationUsageStrategyEnum `json:"UsageStrategy"`
}

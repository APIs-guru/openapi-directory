package shared



type OnDemandCapacityReservationOptions struct {
    CapacityReservationPreference *OnDemandCapacityReservationPreferenceEnum `json:"CapacityReservationPreference,omitempty"`
    CapacityReservationResourceGroupArn *string `json:"CapacityReservationResourceGroupArn,omitempty"`
    UsageStrategy *OnDemandCapacityReservationUsageStrategyEnum `json:"UsageStrategy,omitempty"`
    
}


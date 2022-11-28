package shared

// LaunchTemplateCapacityReservationSpecificationResponse
// Information about the Capacity Reservation targeting option.
type LaunchTemplateCapacityReservationSpecificationResponse struct {
	CapacityReservationPreference *CapacityReservationPreferenceEnum
	CapacityReservationTarget     *CapacityReservationTargetResponse
}

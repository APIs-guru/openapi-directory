package shared

type OnDemandProvisioningSpecification struct {
	AllocationStrategy         OnDemandProvisioningAllocationStrategyEnum `json:"AllocationStrategy"`
	CapacityReservationOptions *OnDemandCapacityReservationOptions        `json:"CapacityReservationOptions,omitempty"`
}

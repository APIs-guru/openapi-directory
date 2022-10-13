package shared

type SpotProvisioningSpecification struct {
	AllocationStrategy     *SpotProvisioningAllocationStrategyEnum `json:"AllocationStrategy"`
	BlockDurationMinutes   *int64                                  `json:"BlockDurationMinutes"`
	TimeoutAction          SpotProvisioningTimeoutActionEnum       `json:"TimeoutAction"`
	TimeoutDurationMinutes int64                                   `json:"TimeoutDurationMinutes"`
}

package shared



type SpotProvisioningSpecification struct {
    AllocationStrategy *SpotProvisioningAllocationStrategyEnum `json:"AllocationStrategy,omitempty"`
    BlockDurationMinutes *int64 `json:"BlockDurationMinutes,omitempty"`
    TimeoutAction SpotProvisioningTimeoutActionEnum `json:"TimeoutAction"`
    TimeoutDurationMinutes int64 `json:"TimeoutDurationMinutes"`
    
}


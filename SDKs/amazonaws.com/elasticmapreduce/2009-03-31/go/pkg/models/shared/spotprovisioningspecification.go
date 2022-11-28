package shared

// SpotProvisioningSpecification
// <p>The launch specification for Spot Instances in the instance fleet, which determines the defined duration, provisioning timeout behavior, and allocation strategy.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. Spot Instance allocation strategy is available in Amazon EMR version 5.12.1 and later.</p> </note>
type SpotProvisioningSpecification struct {
	AllocationStrategy     *SpotProvisioningAllocationStrategyEnum `json:"AllocationStrategy,omitempty"`
	BlockDurationMinutes   *int64                                  `json:"BlockDurationMinutes,omitempty"`
	TimeoutAction          SpotProvisioningTimeoutActionEnum       `json:"TimeoutAction"`
	TimeoutDurationMinutes int64                                   `json:"TimeoutDurationMinutes"`
}

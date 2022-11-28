package shared

// CapacityProvider
// The details of a capacity provider.
type CapacityProvider struct {
	AutoScalingGroupProvider *AutoScalingGroupProvider         `json:"autoScalingGroupProvider,omitempty"`
	CapacityProviderArn      *string                           `json:"capacityProviderArn,omitempty"`
	Name                     *string                           `json:"name,omitempty"`
	Status                   *CapacityProviderStatusEnum       `json:"status,omitempty"`
	Tags                     []Tag                             `json:"tags,omitempty"`
	UpdateStatus             *CapacityProviderUpdateStatusEnum `json:"updateStatus,omitempty"`
	UpdateStatusReason       *string                           `json:"updateStatusReason,omitempty"`
}

package shared

type CapacityProvider struct {
	AutoScalingGroupProvider *AutoScalingGroupProvider         `json:"autoScalingGroupProvider"`
	CapacityProviderArn      *string                           `json:"capacityProviderArn"`
	Name                     *string                           `json:"name"`
	Status                   *CapacityProviderStatusEnum       `json:"status"`
	Tags                     []Tag                             `json:"tags"`
	UpdateStatus             *CapacityProviderUpdateStatusEnum `json:"updateStatus"`
	UpdateStatusReason       *string                           `json:"updateStatusReason"`
}

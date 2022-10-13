package shared

type UpdateCapacityProviderRequest struct {
	AutoScalingGroupProvider AutoScalingGroupProviderUpdate `json:"autoScalingGroupProvider"`
	Name                     string                         `json:"name"`
}

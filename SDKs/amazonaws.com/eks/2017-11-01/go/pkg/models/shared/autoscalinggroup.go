package shared

// AutoScalingGroup
// An Auto Scaling group that is associated with an Amazon EKS managed node group.
type AutoScalingGroup struct {
	Name *string `json:"name,omitempty"`
}

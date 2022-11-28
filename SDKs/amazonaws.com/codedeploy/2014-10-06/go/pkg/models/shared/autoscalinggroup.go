package shared

// AutoScalingGroup
// Information about an Auto Scaling group.
type AutoScalingGroup struct {
	Hook *string `json:"hook,omitempty"`
	Name *string `json:"name,omitempty"`
}

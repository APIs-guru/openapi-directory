package shared

// InstanceStateChange
// Describes an instance state change.
type InstanceStateChange struct {
	CurrentState  *InstanceState
	InstanceID    *string
	PreviousState *InstanceState
}

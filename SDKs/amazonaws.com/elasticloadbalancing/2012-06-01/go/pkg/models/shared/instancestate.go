package shared

// InstanceState
// Information about the state of an EC2 instance.
type InstanceState struct {
	Description *string
	InstanceID  *string
	ReasonCode  *string
	State       *string
}

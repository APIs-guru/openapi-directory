package shared

// InstanceResizePolicy
// Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group.
type InstanceResizePolicy struct {
	InstanceTerminationTimeout *int64   `json:"InstanceTerminationTimeout,omitempty"`
	InstancesToProtect         []string `json:"InstancesToProtect,omitempty"`
	InstancesToTerminate       []string `json:"InstancesToTerminate,omitempty"`
}

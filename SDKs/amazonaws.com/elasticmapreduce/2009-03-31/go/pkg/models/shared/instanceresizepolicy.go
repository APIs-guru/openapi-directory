package shared

type InstanceResizePolicy struct {
	InstanceTerminationTimeout *int64   `json:"InstanceTerminationTimeout,omitempty"`
	InstancesToProtect         []string `json:"InstancesToProtect,omitempty"`
	InstancesToTerminate       []string `json:"InstancesToTerminate,omitempty"`
}

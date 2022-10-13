package shared

type InstanceResizePolicy struct {
	InstanceTerminationTimeout *int64   `json:"InstanceTerminationTimeout"`
	InstancesToProtect         []string `json:"InstancesToProtect"`
	InstancesToTerminate       []string `json:"InstancesToTerminate"`
}

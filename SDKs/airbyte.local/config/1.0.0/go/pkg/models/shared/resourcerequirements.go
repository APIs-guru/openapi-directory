package shared

// ResourceRequirements
// optional resource requirements to run workers (blank for unbounded allocations)
type ResourceRequirements struct {
	CPULimit      *string `json:"cpu_limit,omitempty"`
	CPURequest    *string `json:"cpu_request,omitempty"`
	MemoryLimit   *string `json:"memory_limit,omitempty"`
	MemoryRequest *string `json:"memory_request,omitempty"`
}

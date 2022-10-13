package shared

type ResourceRequirements struct {
	CPULimit      *string `json:"cpu_limit"`
	CPURequest    *string `json:"cpu_request"`
	MemoryLimit   *string `json:"memory_limit"`
	MemoryRequest *string `json:"memory_request"`
}

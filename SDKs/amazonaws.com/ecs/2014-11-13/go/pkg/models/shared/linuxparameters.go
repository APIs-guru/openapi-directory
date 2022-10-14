package shared

type LinuxParameters struct {
	Capabilities       *KernelCapabilities `json:"capabilities,omitempty"`
	Devices            []Device            `json:"devices,omitempty"`
	InitProcessEnabled *bool               `json:"initProcessEnabled,omitempty"`
	MaxSwap            *int64              `json:"maxSwap,omitempty"`
	SharedMemorySize   *int64              `json:"sharedMemorySize,omitempty"`
	Swappiness         *int64              `json:"swappiness,omitempty"`
	Tmpfs              []Tmpfs             `json:"tmpfs,omitempty"`
}

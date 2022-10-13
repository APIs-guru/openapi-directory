package shared

type LinuxParameters struct {
	Devices            []Device `json:"devices"`
	InitProcessEnabled *bool    `json:"initProcessEnabled"`
	MaxSwap            *int64   `json:"maxSwap"`
	SharedMemorySize   *int64   `json:"sharedMemorySize"`
	Swappiness         *int64   `json:"swappiness"`
	Tmpfs              []Tmpfs  `json:"tmpfs"`
}

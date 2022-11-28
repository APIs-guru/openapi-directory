package shared

// GpuDeviceInfo
// Describes the GPU accelerators for the instance type.
type GpuDeviceInfo struct {
	Count        *int64
	Manufacturer *string
	MemoryInfo   *GpuDeviceMemoryInfo
	Name         *string
}

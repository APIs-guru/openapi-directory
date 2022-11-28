package shared

// GpuInfo
// Describes the GPU accelerators for the instance type.
type GpuInfo struct {
	Gpus                []GpuDeviceInfo
	TotalGpuMemoryInMiB *int64
}

package shared

// VCPUInfo
// Describes the vCPU configurations for the instance type.
type VCPUInfo struct {
	DefaultCores          *int64
	DefaultThreadsPerCore *int64
	DefaultVCpus          *int64
	ValidCores            []int64
	ValidThreadsPerCore   []int64
}

package shared

// InstanceStorageInfo
// Describes the disks that are available for the instance type.
type InstanceStorageInfo struct {
	Disks         []DiskInfo
	NvmeSupport   *EphemeralNvmeSupportEnum
	TotalSizeInGb *int64
}

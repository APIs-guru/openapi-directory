package shared

// DiskInfo
// Describes the disk.
type DiskInfo struct {
	Count    *int64
	SizeInGb *int64
	Type     *DiskTypeEnum
}

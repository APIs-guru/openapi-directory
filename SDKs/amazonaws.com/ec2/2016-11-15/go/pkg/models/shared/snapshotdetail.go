package shared

// SnapshotDetail
// Describes the snapshot created from the imported disk.
type SnapshotDetail struct {
	Description   *string
	DeviceName    *string
	DiskImageSize *float64
	Format        *string
	Progress      *string
	SnapshotID    *string
	Status        *string
	StatusMessage *string
	URL           *string
	UserBucket    *UserBucketDetails
}

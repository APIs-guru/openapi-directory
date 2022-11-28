package shared

// SnapshotTaskDetail
// Details about the import snapshot task.
type SnapshotTaskDetail struct {
	Description   *string
	DiskImageSize *float64
	Encrypted     *bool
	Format        *string
	KmsKeyID      *string
	Progress      *string
	SnapshotID    *string
	Status        *string
	StatusMessage *string
	URL           *string
	UserBucket    *UserBucketDetails
}

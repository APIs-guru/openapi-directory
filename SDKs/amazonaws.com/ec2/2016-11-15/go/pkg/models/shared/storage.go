package shared

// Storage
// Describes the storage location for an instance store-backed AMI.
type Storage struct {
	S3 *S3Storage
}

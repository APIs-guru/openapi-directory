package shared

// ExportTaskS3Location
// Describes the destination for an export image task.
type ExportTaskS3Location struct {
	S3Bucket *string
	S3Prefix *string
}

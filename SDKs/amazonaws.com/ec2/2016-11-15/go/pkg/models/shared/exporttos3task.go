package shared

// ExportToS3Task
// Describes the format and location for the export task.
type ExportToS3Task struct {
	ContainerFormat *ContainerFormatEnum
	DiskImageFormat *DiskImageFormatEnum
	S3Bucket        *string
	S3Key           *string
}

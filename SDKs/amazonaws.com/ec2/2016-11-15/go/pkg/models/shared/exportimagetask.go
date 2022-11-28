package shared

// ExportImageTask
// Describes an export image task.
type ExportImageTask struct {
	Description       *string
	ExportImageTaskID *string
	ImageID           *string
	Progress          *string
	S3ExportLocation  *ExportTaskS3Location
	Status            *string
	StatusMessage     *string
	Tags              []Tag
}

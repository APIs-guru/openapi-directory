package shared

type ExportImageResult struct {
	Description       *string
	DiskImageFormat   *DiskImageFormatEnum
	ExportImageTaskID *string
	ImageID           *string
	Progress          *string
	RoleName          *string
	S3ExportLocation  *ExportTaskS3Location
	Status            *string
	StatusMessage     *string
	Tags              []Tag
}

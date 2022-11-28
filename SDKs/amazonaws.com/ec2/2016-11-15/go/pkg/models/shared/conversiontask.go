package shared

// ConversionTask
// Describes a conversion task.
type ConversionTask struct {
	ConversionTaskID *string
	ExpirationTime   *string
	ImportInstance   *ImportInstanceTaskDetails
	ImportVolume     *ImportVolumeTaskDetails
	State            *ConversionTaskStateEnum
	StatusMessage    *string
	Tags             []Tag
}

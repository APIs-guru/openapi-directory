package shared

// ImportInstanceTaskDetails
// Describes an import instance task.
type ImportInstanceTaskDetails struct {
	Description *string
	InstanceID  *string
	Platform    *PlatformValuesEnum
	Volumes     []ImportInstanceVolumeDetailItem
}

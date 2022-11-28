package shared

// InstanceExportDetails
// Describes an instance to export.
type InstanceExportDetails struct {
	InstanceID        *string
	TargetEnvironment *ExportEnvironmentEnum
}

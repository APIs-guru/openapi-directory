package shared

// ImportImageTask
// Describes an import image task.
type ImportImageTask struct {
	Architecture          *string
	BootMode              *BootModeValuesEnum
	Description           *string
	Encrypted             *bool
	Hypervisor            *string
	ImageID               *string
	ImportTaskID          *string
	KmsKeyID              *string
	LicenseSpecifications []ImportImageLicenseConfigurationResponse
	LicenseType           *string
	Platform              *string
	Progress              *string
	SnapshotDetails       []SnapshotDetail
	Status                *string
	StatusMessage         *string
	Tags                  []Tag
	UsageOperation        *string
}

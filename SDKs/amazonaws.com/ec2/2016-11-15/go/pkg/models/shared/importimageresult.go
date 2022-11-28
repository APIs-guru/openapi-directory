package shared

type ImportImageResult struct {
	Architecture          *string
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

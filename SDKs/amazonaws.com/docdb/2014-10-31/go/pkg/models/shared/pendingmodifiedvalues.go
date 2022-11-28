package shared

// PendingModifiedValues
//
//	One or more modified settings for an instance. These modified settings have been requested, but haven't been applied yet.
type PendingModifiedValues struct {
	AllocatedStorage             *int64
	BackupRetentionPeriod        *int64
	CaCertificateIdentifier      *string
	DbInstanceClass              *string
	DbInstanceIdentifier         *string
	DbSubnetGroupName            *string
	EngineVersion                *string
	Iops                         *int64
	LicenseModel                 *string
	MasterUserPassword           *string
	MultiAz                      *bool
	PendingCloudwatchLogsExports *PendingCloudwatchLogsExports
	Port                         *int64
	StorageType                  *string
}

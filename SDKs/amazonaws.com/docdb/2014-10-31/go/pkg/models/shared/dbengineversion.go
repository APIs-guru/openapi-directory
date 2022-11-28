package shared

// DbEngineVersion
//
//	Detailed information about an engine version.
type DbEngineVersion struct {
	DbEngineDescription                *string
	DbEngineVersionDescription         *string
	DbParameterGroupFamily             *string
	Engine                             *string
	EngineVersion                      *string
	ExportableLogTypes                 []string
	SupportsLogExportsToCloudwatchLogs *bool
	ValidUpgradeTarget                 []UpgradeTarget
}

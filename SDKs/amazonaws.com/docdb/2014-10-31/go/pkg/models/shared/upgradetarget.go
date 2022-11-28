package shared

// UpgradeTarget
// The version of the database engine that an instance can be upgraded to.
type UpgradeTarget struct {
	AutoUpgrade           *bool
	Description           *string
	Engine                *string
	EngineVersion         *string
	IsMajorVersionUpgrade *bool
}

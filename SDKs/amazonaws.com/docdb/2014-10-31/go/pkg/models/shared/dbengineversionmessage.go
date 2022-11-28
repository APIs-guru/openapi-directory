package shared

// DbEngineVersionMessage
// Represents the output of <a>DescribeDBEngineVersions</a>.
type DbEngineVersionMessage struct {
	DbEngineVersions []DbEngineVersion
	Marker           *string
}

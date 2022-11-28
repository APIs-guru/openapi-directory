package shared

// DbInstanceMessage
// Represents the output of <a>DescribeDBInstances</a>.
type DbInstanceMessage struct {
	DbInstances []DbInstance
	Marker      *string
}

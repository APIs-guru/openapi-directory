package shared

type DataPullModeEnum string

const (
	DataPullModeEnumIncremental DataPullModeEnum = "Incremental"
	DataPullModeEnumComplete    DataPullModeEnum = "Complete"
)

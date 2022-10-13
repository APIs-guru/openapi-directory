package shared

type TaskTypeEnum string

const (
	TaskTypeEnumArithmetic TaskTypeEnum = "Arithmetic"
	TaskTypeEnumFilter     TaskTypeEnum = "Filter"
	TaskTypeEnumMap        TaskTypeEnum = "Map"
	TaskTypeEnumMask       TaskTypeEnum = "Mask"
	TaskTypeEnumMerge      TaskTypeEnum = "Merge"
	TaskTypeEnumTruncate   TaskTypeEnum = "Truncate"
	TaskTypeEnumValidate   TaskTypeEnum = "Validate"
)

package shared

type DatasetStatusEnum string

const (
	DatasetStatusEnumCreating DatasetStatusEnum = "CREATING"
	DatasetStatusEnumActive   DatasetStatusEnum = "ACTIVE"
	DatasetStatusEnumDeleting DatasetStatusEnum = "DELETING"
)

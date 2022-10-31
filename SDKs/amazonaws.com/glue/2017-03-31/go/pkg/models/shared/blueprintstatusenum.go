package shared

type BlueprintStatusEnum string

const (
	BlueprintStatusEnumCreating BlueprintStatusEnum = "CREATING"
	BlueprintStatusEnumActive   BlueprintStatusEnum = "ACTIVE"
	BlueprintStatusEnumUpdating BlueprintStatusEnum = "UPDATING"
	BlueprintStatusEnumFailed   BlueprintStatusEnum = "FAILED"
)

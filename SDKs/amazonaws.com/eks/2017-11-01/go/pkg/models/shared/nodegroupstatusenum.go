package shared

type NodegroupStatusEnum string

const (
	NodegroupStatusEnumCreating     NodegroupStatusEnum = "CREATING"
	NodegroupStatusEnumActive       NodegroupStatusEnum = "ACTIVE"
	NodegroupStatusEnumUpdating     NodegroupStatusEnum = "UPDATING"
	NodegroupStatusEnumDeleting     NodegroupStatusEnum = "DELETING"
	NodegroupStatusEnumCreateFailed NodegroupStatusEnum = "CREATE_FAILED"
	NodegroupStatusEnumDeleteFailed NodegroupStatusEnum = "DELETE_FAILED"
	NodegroupStatusEnumDegraded     NodegroupStatusEnum = "DEGRADED"
)

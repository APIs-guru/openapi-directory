package shared

type AddonStatusEnum string

const (
	AddonStatusEnumCreating     AddonStatusEnum = "CREATING"
	AddonStatusEnumActive       AddonStatusEnum = "ACTIVE"
	AddonStatusEnumCreateFailed AddonStatusEnum = "CREATE_FAILED"
	AddonStatusEnumUpdating     AddonStatusEnum = "UPDATING"
	AddonStatusEnumDeleting     AddonStatusEnum = "DELETING"
	AddonStatusEnumDeleteFailed AddonStatusEnum = "DELETE_FAILED"
	AddonStatusEnumDegraded     AddonStatusEnum = "DEGRADED"
)

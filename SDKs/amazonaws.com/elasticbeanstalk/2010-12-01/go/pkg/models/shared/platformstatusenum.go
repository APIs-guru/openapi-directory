package shared

type PlatformStatusEnum string

const (
	PlatformStatusEnumCreating PlatformStatusEnum = "Creating"
	PlatformStatusEnumFailed   PlatformStatusEnum = "Failed"
	PlatformStatusEnumReady    PlatformStatusEnum = "Ready"
	PlatformStatusEnumDeleting PlatformStatusEnum = "Deleting"
	PlatformStatusEnumDeleted  PlatformStatusEnum = "Deleted"
)

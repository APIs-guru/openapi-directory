package shared

type ReplaceRootVolumeTaskStateEnum string

const (
	ReplaceRootVolumeTaskStateEnumPending        ReplaceRootVolumeTaskStateEnum = "pending"
	ReplaceRootVolumeTaskStateEnumInProgress     ReplaceRootVolumeTaskStateEnum = "in-progress"
	ReplaceRootVolumeTaskStateEnumFailing        ReplaceRootVolumeTaskStateEnum = "failing"
	ReplaceRootVolumeTaskStateEnumSucceeded      ReplaceRootVolumeTaskStateEnum = "succeeded"
	ReplaceRootVolumeTaskStateEnumFailed         ReplaceRootVolumeTaskStateEnum = "failed"
	ReplaceRootVolumeTaskStateEnumFailedDetached ReplaceRootVolumeTaskStateEnum = "failed-detached"
)

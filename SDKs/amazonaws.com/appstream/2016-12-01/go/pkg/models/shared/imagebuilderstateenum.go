package shared

type ImageBuilderStateEnum string

const (
	ImageBuilderStateEnumPending              ImageBuilderStateEnum = "PENDING"
	ImageBuilderStateEnumUpdatingAgent        ImageBuilderStateEnum = "UPDATING_AGENT"
	ImageBuilderStateEnumRunning              ImageBuilderStateEnum = "RUNNING"
	ImageBuilderStateEnumStopping             ImageBuilderStateEnum = "STOPPING"
	ImageBuilderStateEnumStopped              ImageBuilderStateEnum = "STOPPED"
	ImageBuilderStateEnumRebooting            ImageBuilderStateEnum = "REBOOTING"
	ImageBuilderStateEnumSnapshotting         ImageBuilderStateEnum = "SNAPSHOTTING"
	ImageBuilderStateEnumDeleting             ImageBuilderStateEnum = "DELETING"
	ImageBuilderStateEnumFailed               ImageBuilderStateEnum = "FAILED"
	ImageBuilderStateEnumUpdating             ImageBuilderStateEnum = "UPDATING"
	ImageBuilderStateEnumPendingQualification ImageBuilderStateEnum = "PENDING_QUALIFICATION"
)

package shared

type BundleTaskStateEnum string

const (
	BundleTaskStateEnumPending            BundleTaskStateEnum = "pending"
	BundleTaskStateEnumWaitingForShutdown BundleTaskStateEnum = "waiting-for-shutdown"
	BundleTaskStateEnumBundling           BundleTaskStateEnum = "bundling"
	BundleTaskStateEnumStoring            BundleTaskStateEnum = "storing"
	BundleTaskStateEnumCancelling         BundleTaskStateEnum = "cancelling"
	BundleTaskStateEnumComplete           BundleTaskStateEnum = "complete"
	BundleTaskStateEnumFailed             BundleTaskStateEnum = "failed"
)

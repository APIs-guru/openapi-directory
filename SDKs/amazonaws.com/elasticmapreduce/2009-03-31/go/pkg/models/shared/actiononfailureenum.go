package shared

type ActionOnFailureEnum string

const (
	ActionOnFailureEnumTerminateJobFlow ActionOnFailureEnum = "TERMINATE_JOB_FLOW"
	ActionOnFailureEnumTerminateCluster ActionOnFailureEnum = "TERMINATE_CLUSTER"
	ActionOnFailureEnumCancelAndWait    ActionOnFailureEnum = "CANCEL_AND_WAIT"
	ActionOnFailureEnumContinue         ActionOnFailureEnum = "CONTINUE"
)

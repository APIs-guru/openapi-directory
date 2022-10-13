package shared

type EffectiveDeploymentExecutionStatusEnum string

const (
	EffectiveDeploymentExecutionStatusEnumInProgress EffectiveDeploymentExecutionStatusEnum = "IN_PROGRESS"
	EffectiveDeploymentExecutionStatusEnumQueued     EffectiveDeploymentExecutionStatusEnum = "QUEUED"
	EffectiveDeploymentExecutionStatusEnumFailed     EffectiveDeploymentExecutionStatusEnum = "FAILED"
	EffectiveDeploymentExecutionStatusEnumCompleted  EffectiveDeploymentExecutionStatusEnum = "COMPLETED"
	EffectiveDeploymentExecutionStatusEnumTimedOut   EffectiveDeploymentExecutionStatusEnum = "TIMED_OUT"
	EffectiveDeploymentExecutionStatusEnumCanceled   EffectiveDeploymentExecutionStatusEnum = "CANCELED"
	EffectiveDeploymentExecutionStatusEnumRejected   EffectiveDeploymentExecutionStatusEnum = "REJECTED"
)

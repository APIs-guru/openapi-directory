package shared

type TriggerEventTypeEnum string

const (
	TriggerEventTypeEnumDeploymentStart    TriggerEventTypeEnum = "DeploymentStart"
	TriggerEventTypeEnumDeploymentSuccess  TriggerEventTypeEnum = "DeploymentSuccess"
	TriggerEventTypeEnumDeploymentFailure  TriggerEventTypeEnum = "DeploymentFailure"
	TriggerEventTypeEnumDeploymentStop     TriggerEventTypeEnum = "DeploymentStop"
	TriggerEventTypeEnumDeploymentRollback TriggerEventTypeEnum = "DeploymentRollback"
	TriggerEventTypeEnumDeploymentReady    TriggerEventTypeEnum = "DeploymentReady"
	TriggerEventTypeEnumInstanceStart      TriggerEventTypeEnum = "InstanceStart"
	TriggerEventTypeEnumInstanceSuccess    TriggerEventTypeEnum = "InstanceSuccess"
	TriggerEventTypeEnumInstanceFailure    TriggerEventTypeEnum = "InstanceFailure"
	TriggerEventTypeEnumInstanceReady      TriggerEventTypeEnum = "InstanceReady"
)

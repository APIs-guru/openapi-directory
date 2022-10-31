package shared

type TriggerStateEnum string

const (
	TriggerStateEnumCreating     TriggerStateEnum = "CREATING"
	TriggerStateEnumCreated      TriggerStateEnum = "CREATED"
	TriggerStateEnumActivating   TriggerStateEnum = "ACTIVATING"
	TriggerStateEnumActivated    TriggerStateEnum = "ACTIVATED"
	TriggerStateEnumDeactivating TriggerStateEnum = "DEACTIVATING"
	TriggerStateEnumDeactivated  TriggerStateEnum = "DEACTIVATED"
	TriggerStateEnumDeleting     TriggerStateEnum = "DELETING"
	TriggerStateEnumUpdating     TriggerStateEnum = "UPDATING"
)

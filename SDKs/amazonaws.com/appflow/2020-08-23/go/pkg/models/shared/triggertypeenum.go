package shared

type TriggerTypeEnum string

const (
	TriggerTypeEnumScheduled TriggerTypeEnum = "Scheduled"
	TriggerTypeEnumEvent     TriggerTypeEnum = "Event"
	TriggerTypeEnumOnDemand  TriggerTypeEnum = "OnDemand"
)

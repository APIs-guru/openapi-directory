package shared




type TriggerTypeEnum string

const (
    TriggerTypeEnumScheduled TriggerTypeEnum = "SCHEDULED"
TriggerTypeEnumConditional TriggerTypeEnum = "CONDITIONAL"
TriggerTypeEnumOnDemand TriggerTypeEnum = "ON_DEMAND"
TriggerTypeEnumEvent TriggerTypeEnum = "EVENT"
)



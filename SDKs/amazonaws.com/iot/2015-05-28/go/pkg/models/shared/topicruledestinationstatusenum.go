package shared

type TopicRuleDestinationStatusEnum string

const (
	TopicRuleDestinationStatusEnumEnabled    TopicRuleDestinationStatusEnum = "ENABLED"
	TopicRuleDestinationStatusEnumInProgress TopicRuleDestinationStatusEnum = "IN_PROGRESS"
	TopicRuleDestinationStatusEnumDisabled   TopicRuleDestinationStatusEnum = "DISABLED"
	TopicRuleDestinationStatusEnumError      TopicRuleDestinationStatusEnum = "ERROR"
	TopicRuleDestinationStatusEnumDeleting   TopicRuleDestinationStatusEnum = "DELETING"
)

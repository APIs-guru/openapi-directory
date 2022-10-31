package shared

type ConfigRuleStateEnum string

const (
	ConfigRuleStateEnumActive          ConfigRuleStateEnum = "ACTIVE"
	ConfigRuleStateEnumDeleting        ConfigRuleStateEnum = "DELETING"
	ConfigRuleStateEnumDeletingResults ConfigRuleStateEnum = "DELETING_RESULTS"
	ConfigRuleStateEnumEvaluating      ConfigRuleStateEnum = "EVALUATING"
)

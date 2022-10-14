package shared

type StatelessRuleGroup struct {
	Priority      *int64  `json:"Priority,omitempty"`
	ResourceID    *string `json:"ResourceId,omitempty"`
	RuleGroupName *string `json:"RuleGroupName,omitempty"`
}

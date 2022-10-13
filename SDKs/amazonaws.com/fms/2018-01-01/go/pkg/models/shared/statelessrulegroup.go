package shared

type StatelessRuleGroup struct {
	Priority      *int64  `json:"Priority"`
	ResourceID    *string `json:"ResourceId"`
	RuleGroupName *string `json:"RuleGroupName"`
}

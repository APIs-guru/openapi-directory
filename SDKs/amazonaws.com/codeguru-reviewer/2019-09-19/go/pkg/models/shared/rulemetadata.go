package shared

type RuleMetadata struct {
	LongDescription  *string  `json:"LongDescription"`
	RuleID           *string  `json:"RuleId"`
	RuleName         *string  `json:"RuleName"`
	RuleTags         []string `json:"RuleTags"`
	ShortDescription *string  `json:"ShortDescription"`
}

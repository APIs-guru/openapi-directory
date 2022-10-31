package shared

type RuleMetadata struct {
	LongDescription  *string  `json:"LongDescription,omitempty"`
	RuleID           *string  `json:"RuleId,omitempty"`
	RuleName         *string  `json:"RuleName,omitempty"`
	RuleTags         []string `json:"RuleTags,omitempty"`
	ShortDescription *string  `json:"ShortDescription,omitempty"`
}

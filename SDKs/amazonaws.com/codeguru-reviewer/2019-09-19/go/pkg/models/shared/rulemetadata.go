package shared

// RuleMetadata
// Metadata about a rule. Rule metadata includes an ID, a name, a list of tags, and a short and long description. CodeGuru Reviewer uses rules to analyze code. A rule's recommendation is included in analysis results if code is detected that violates the rule.
type RuleMetadata struct {
	LongDescription  *string  `json:"LongDescription,omitempty"`
	RuleID           *string  `json:"RuleId,omitempty"`
	RuleName         *string  `json:"RuleName,omitempty"`
	RuleTags         []string `json:"RuleTags,omitempty"`
	ShortDescription *string  `json:"ShortDescription,omitempty"`
}

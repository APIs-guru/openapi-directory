package shared

// LateDataRule
// A structure that contains the name and configuration information of a late data rule.
type LateDataRule struct {
	RuleConfiguration LateDataRuleConfiguration `json:"ruleConfiguration"`
	RuleName          *string                   `json:"ruleName,omitempty"`
}

package shared

// FindingFilter
// This data type is used as a request parameter in the <a>ListFindings</a> action.
type FindingFilter struct {
	AgentIds          []string        `json:"agentIds,omitempty"`
	Attributes        []Attribute     `json:"attributes,omitempty"`
	AutoScalingGroups []string        `json:"autoScalingGroups,omitempty"`
	CreationTimeRange *TimestampRange `json:"creationTimeRange,omitempty"`
	RuleNames         []string        `json:"ruleNames,omitempty"`
	RulesPackageArns  []string        `json:"rulesPackageArns,omitempty"`
	Severities        []SeverityEnum  `json:"severities,omitempty"`
	UserAttributes    []Attribute     `json:"userAttributes,omitempty"`
}

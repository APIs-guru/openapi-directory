package shared

type FindingFilter struct {
	AgentIds          []string        `json:"agentIds"`
	Attributes        []Attribute     `json:"attributes"`
	AutoScalingGroups []string        `json:"autoScalingGroups"`
	CreationTimeRange *TimestampRange `json:"creationTimeRange"`
	RuleNames         []string        `json:"ruleNames"`
	RulesPackageArns  []string        `json:"rulesPackageArns"`
	Severities        []SeverityEnum  `json:"severities"`
	UserAttributes    []Attribute     `json:"userAttributes"`
}

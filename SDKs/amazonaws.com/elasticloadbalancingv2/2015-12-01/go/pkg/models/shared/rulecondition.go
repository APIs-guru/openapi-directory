package shared

// RuleCondition
// <p>Information about a condition for a rule.</p> <p>Each rule can optionally include up to one of each of the following conditions: <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>, and <code>source-ip</code>. Each rule can also optionally include one or more of each of the following conditions: <code>http-header</code> and <code>query-string</code>.</p>
type RuleCondition struct {
	Field                   *string
	HostHeaderConfig        *HostHeaderConditionConfig
	HTTPHeaderConfig        *HTTPHeaderConditionConfig
	HTTPRequestMethodConfig *HTTPRequestMethodConditionConfig
	PathPatternConfig       *PathPatternConditionConfig
	QueryStringConfig       *QueryStringConditionConfig
	SourceIPConfig          *SourceIPConditionConfig
	Values                  []string
}

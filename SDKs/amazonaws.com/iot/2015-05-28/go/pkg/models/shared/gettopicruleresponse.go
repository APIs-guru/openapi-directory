package shared

// GetTopicRuleResponse
// The output from the GetTopicRule operation.
type GetTopicRuleResponse struct {
	Rule    *TopicRule `json:"rule,omitempty"`
	RuleArn *string    `json:"ruleArn,omitempty"`
}

package shared

type GetTopicRuleResponse struct {
	Rule    *TopicRule `json:"rule,omitempty"`
	RuleArn *string    `json:"ruleArn,omitempty"`
}

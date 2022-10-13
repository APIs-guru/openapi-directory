package shared

type GetTopicRuleResponse struct {
	Rule    *TopicRule `json:"rule"`
	RuleArn *string    `json:"ruleArn"`
}

package shared

type ListTopicRulesResponse struct {
	NextToken *string             `json:"nextToken"`
	Rules     []TopicRuleListItem `json:"rules"`
}

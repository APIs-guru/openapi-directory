package shared

type ListTopicRulesResponse struct {
	NextToken *string             `json:"nextToken,omitempty"`
	Rules     []TopicRuleListItem `json:"rules,omitempty"`
}

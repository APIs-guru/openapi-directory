package shared

// ListTopicRulesResponse
// The output from the ListTopicRules operation.
type ListTopicRulesResponse struct {
	NextToken *string             `json:"nextToken,omitempty"`
	Rules     []TopicRuleListItem `json:"rules,omitempty"`
}

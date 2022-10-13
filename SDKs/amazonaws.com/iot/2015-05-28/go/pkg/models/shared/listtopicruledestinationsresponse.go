package shared

type ListTopicRuleDestinationsResponse struct {
	DestinationSummaries []TopicRuleDestinationSummary `json:"destinationSummaries"`
	NextToken            *string                       `json:"nextToken"`
}

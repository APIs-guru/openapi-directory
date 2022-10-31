package shared

type ListTopicRuleDestinationsResponse struct {
	DestinationSummaries []TopicRuleDestinationSummary `json:"destinationSummaries,omitempty"`
	NextToken            *string                       `json:"nextToken,omitempty"`
}

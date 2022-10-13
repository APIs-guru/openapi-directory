package shared

type ListRetainedMessagesResponse struct {
	NextToken      *string                  `json:"nextToken"`
	RetainedTopics []RetainedMessageSummary `json:"retainedTopics"`
}

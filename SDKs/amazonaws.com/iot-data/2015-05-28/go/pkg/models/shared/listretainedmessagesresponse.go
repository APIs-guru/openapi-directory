package shared



type ListRetainedMessagesResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    RetainedTopics []RetainedMessageSummary `json:"retainedTopics,omitempty"`
    
}


package shared

// DescribeEventTopicsResult
// The result of a DescribeEventTopic request.
type DescribeEventTopicsResult struct {
	EventTopics []EventTopic `json:"EventTopics,omitempty"`
}

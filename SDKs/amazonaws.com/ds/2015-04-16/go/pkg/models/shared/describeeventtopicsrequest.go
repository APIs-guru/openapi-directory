package shared

// DescribeEventTopicsRequest
// Describes event topics.
type DescribeEventTopicsRequest struct {
	DirectoryID *string  `json:"DirectoryId,omitempty"`
	TopicNames  []string `json:"TopicNames,omitempty"`
}

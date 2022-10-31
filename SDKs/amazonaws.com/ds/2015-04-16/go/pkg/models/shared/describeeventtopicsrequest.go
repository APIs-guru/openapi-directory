package shared

type DescribeEventTopicsRequest struct {
	DirectoryID *string  `json:"DirectoryId,omitempty"`
	TopicNames  []string `json:"TopicNames,omitempty"`
}

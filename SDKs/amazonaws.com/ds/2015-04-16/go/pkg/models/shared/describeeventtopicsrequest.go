package shared

type DescribeEventTopicsRequest struct {
	DirectoryID *string  `json:"DirectoryId"`
	TopicNames  []string `json:"TopicNames"`
}

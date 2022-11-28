package shared

// DeregisterEventTopicRequest
// Removes the specified directory as a publisher to the specified Amazon SNS topic.
type DeregisterEventTopicRequest struct {
	DirectoryID string `json:"DirectoryId"`
	TopicName   string `json:"TopicName"`
}

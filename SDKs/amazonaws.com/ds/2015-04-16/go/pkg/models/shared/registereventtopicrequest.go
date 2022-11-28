package shared

// RegisterEventTopicRequest
// Registers a new event topic.
type RegisterEventTopicRequest struct {
	DirectoryID string `json:"DirectoryId"`
	TopicName   string `json:"TopicName"`
}

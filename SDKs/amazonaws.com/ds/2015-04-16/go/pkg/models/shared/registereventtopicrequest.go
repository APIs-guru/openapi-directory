package shared

type RegisterEventTopicRequest struct {
	DirectoryID string `json:"DirectoryId"`
	TopicName   string `json:"TopicName"`
}

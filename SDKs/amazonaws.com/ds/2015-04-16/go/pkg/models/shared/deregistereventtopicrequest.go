package shared

type DeregisterEventTopicRequest struct {
	DirectoryID string `json:"DirectoryId"`
	TopicName   string `json:"TopicName"`
}

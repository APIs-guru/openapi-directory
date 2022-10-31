package shared

type CreateLogSubscriptionRequest struct {
	DirectoryID  string `json:"DirectoryId"`
	LogGroupName string `json:"LogGroupName"`
}

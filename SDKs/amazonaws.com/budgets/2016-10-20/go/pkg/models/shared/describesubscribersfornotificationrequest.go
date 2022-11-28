package shared

// DescribeSubscribersForNotificationRequest
//
//	Request of DescribeSubscribersForNotification
type DescribeSubscribersForNotificationRequest struct {
	AccountID    string       `json:"AccountId"`
	BudgetName   string       `json:"BudgetName"`
	MaxResults   *int64       `json:"MaxResults,omitempty"`
	NextToken    *string      `json:"NextToken,omitempty"`
	Notification Notification `json:"Notification"`
}

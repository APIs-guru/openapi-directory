package shared

// DescribeNotificationsForBudgetResponse
//
//	Response of GetNotificationsForBudget
type DescribeNotificationsForBudgetResponse struct {
	NextToken     *string        `json:"NextToken,omitempty"`
	Notifications []Notification `json:"Notifications,omitempty"`
}

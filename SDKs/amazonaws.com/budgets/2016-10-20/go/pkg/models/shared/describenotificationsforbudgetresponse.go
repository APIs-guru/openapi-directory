package shared



type DescribeNotificationsForBudgetResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Notifications []Notification `json:"Notifications,omitempty"`
    
}


package shared

type DescribeNotificationsForBudgetResponse struct {
	NextToken     *string        `json:"NextToken"`
	Notifications []Notification `json:"Notifications"`
}

package shared

type DescribeScheduledActionsResponse struct {
	NextToken        *string           `json:"NextToken,omitempty"`
	ScheduledActions []ScheduledAction `json:"ScheduledActions,omitempty"`
}

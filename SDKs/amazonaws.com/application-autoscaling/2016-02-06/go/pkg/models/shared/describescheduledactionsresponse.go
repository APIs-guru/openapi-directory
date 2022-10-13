package shared

type DescribeScheduledActionsResponse struct {
	NextToken        *string           `json:"NextToken"`
	ScheduledActions []ScheduledAction `json:"ScheduledActions"`
}

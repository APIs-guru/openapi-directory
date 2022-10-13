package shared

type Schedule struct {
	ScheduleExpression *string            `json:"ScheduleExpression"`
	State              *ScheduleStateEnum `json:"State"`
}

package shared



type Schedule struct {
    ScheduleExpression *string `json:"ScheduleExpression,omitempty"`
    State *ScheduleStateEnum `json:"State,omitempty"`
    
}


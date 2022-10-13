package shared

type PutRuleRequest struct {
	Description        *string        `json:"Description"`
	EventBusName       *string        `json:"EventBusName"`
	EventPattern       *string        `json:"EventPattern"`
	Name               string         `json:"Name"`
	RoleArn            *string        `json:"RoleArn"`
	ScheduleExpression *string        `json:"ScheduleExpression"`
	State              *RuleStateEnum `json:"State"`
	Tags               []Tag          `json:"Tags"`
}

package shared

type Rule struct {
	Arn                *string        `json:"Arn"`
	Description        *string        `json:"Description"`
	EventBusName       *string        `json:"EventBusName"`
	EventPattern       *string        `json:"EventPattern"`
	ManagedBy          *string        `json:"ManagedBy"`
	Name               *string        `json:"Name"`
	RoleArn            *string        `json:"RoleArn"`
	ScheduleExpression *string        `json:"ScheduleExpression"`
	State              *RuleStateEnum `json:"State"`
}

package shared

type Rule struct {
	Arn                *string        `json:"Arn,omitempty"`
	Description        *string        `json:"Description,omitempty"`
	EventBusName       *string        `json:"EventBusName,omitempty"`
	EventPattern       *string        `json:"EventPattern,omitempty"`
	ManagedBy          *string        `json:"ManagedBy,omitempty"`
	Name               *string        `json:"Name,omitempty"`
	RoleArn            *string        `json:"RoleArn,omitempty"`
	ScheduleExpression *string        `json:"ScheduleExpression,omitempty"`
	State              *RuleStateEnum `json:"State,omitempty"`
}

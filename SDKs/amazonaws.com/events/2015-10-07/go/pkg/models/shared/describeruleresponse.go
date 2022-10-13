package shared

type DescribeRuleResponse struct {
	Arn                *string        `json:"Arn"`
	CreatedBy          *string        `json:"CreatedBy"`
	Description        *string        `json:"Description"`
	EventBusName       *string        `json:"EventBusName"`
	EventPattern       *string        `json:"EventPattern"`
	ManagedBy          *string        `json:"ManagedBy"`
	Name               *string        `json:"Name"`
	RoleArn            *string        `json:"RoleArn"`
	ScheduleExpression *string        `json:"ScheduleExpression"`
	State              *RuleStateEnum `json:"State"`
}

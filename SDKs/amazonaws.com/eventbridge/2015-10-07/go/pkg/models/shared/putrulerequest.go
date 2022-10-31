package shared



type PutRuleRequest struct {
    Description *string `json:"Description,omitempty"`
    EventBusName *string `json:"EventBusName,omitempty"`
    EventPattern *string `json:"EventPattern,omitempty"`
    Name string `json:"Name"`
    RoleArn *string `json:"RoleArn,omitempty"`
    ScheduleExpression *string `json:"ScheduleExpression,omitempty"`
    State *RuleStateEnum `json:"State,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}


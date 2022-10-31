package shared



type Schedule struct {
    PipelineExecutionStartCondition *PipelineExecutionStartConditionEnum `json:"pipelineExecutionStartCondition,omitempty"`
    ScheduleExpression *string `json:"scheduleExpression,omitempty"`
    Timezone *string `json:"timezone,omitempty"`
    
}


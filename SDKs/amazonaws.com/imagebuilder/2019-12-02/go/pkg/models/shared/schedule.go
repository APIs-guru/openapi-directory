package shared

type Schedule struct {
	PipelineExecutionStartCondition *PipelineExecutionStartConditionEnum `json:"pipelineExecutionStartCondition"`
	ScheduleExpression              *string                              `json:"scheduleExpression"`
	Timezone                        *string                              `json:"timezone"`
}

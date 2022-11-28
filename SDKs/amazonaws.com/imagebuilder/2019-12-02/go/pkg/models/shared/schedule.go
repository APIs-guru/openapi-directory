package shared

// Schedule
// A schedule configures how often and when a pipeline will automatically create a new image.
type Schedule struct {
	PipelineExecutionStartCondition *PipelineExecutionStartConditionEnum `json:"pipelineExecutionStartCondition,omitempty"`
	ScheduleExpression              *string                              `json:"scheduleExpression,omitempty"`
	Timezone                        *string                              `json:"timezone,omitempty"`
}

package shared

import (
	"time"
)

// ScheduledTriggerProperties
// Specifies the configuration details of a scheduled-trigger flow that you define. Currently, these settings only apply to the scheduled-trigger type.
type ScheduledTriggerProperties struct {
	DataPullMode       *DataPullModeEnum `json:"DataPullMode,omitempty"`
	FirstExecutionFrom *time.Time        `json:"FirstExecutionFrom,omitempty"`
	ScheduleEndTime    *time.Time        `json:"ScheduleEndTime,omitempty"`
	ScheduleExpression string            `json:"ScheduleExpression"`
	ScheduleOffset     *int64            `json:"ScheduleOffset,omitempty"`
	ScheduleStartTime  *time.Time        `json:"ScheduleStartTime,omitempty"`
	Timezone           *string           `json:"Timezone,omitempty"`
}

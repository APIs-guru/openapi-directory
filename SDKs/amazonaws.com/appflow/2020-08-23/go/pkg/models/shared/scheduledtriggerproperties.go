package shared

import (
	"time"
)

// ScheduledTriggerProperties
//
//	Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the <code>Scheduled</code> trigger type.
type ScheduledTriggerProperties struct {
	DataPullMode       *DataPullModeEnum `json:"dataPullMode,omitempty"`
	FirstExecutionFrom *time.Time        `json:"firstExecutionFrom,omitempty"`
	ScheduleEndTime    *time.Time        `json:"scheduleEndTime,omitempty"`
	ScheduleExpression string            `json:"scheduleExpression"`
	ScheduleOffset     *int64            `json:"scheduleOffset,omitempty"`
	ScheduleStartTime  *time.Time        `json:"scheduleStartTime,omitempty"`
	Timezone           *string           `json:"timezone,omitempty"`
}

package shared

import (
	"time"
)

type ScheduledTriggerProperties struct {
	DataPullMode       *DataPullModeEnum `json:"dataPullMode"`
	FirstExecutionFrom *time.Time        `json:"firstExecutionFrom"`
	ScheduleEndTime    *time.Time        `json:"scheduleEndTime"`
	ScheduleExpression string            `json:"scheduleExpression"`
	ScheduleOffset     *int64            `json:"scheduleOffset"`
	ScheduleStartTime  *time.Time        `json:"scheduleStartTime"`
	Timezone           *string           `json:"timezone"`
}

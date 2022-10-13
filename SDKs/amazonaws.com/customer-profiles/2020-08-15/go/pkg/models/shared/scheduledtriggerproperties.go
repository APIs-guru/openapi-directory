package shared

import (
	"time"
)

type ScheduledTriggerProperties struct {
	DataPullMode       *DataPullModeEnum `json:"DataPullMode"`
	FirstExecutionFrom *time.Time        `json:"FirstExecutionFrom"`
	ScheduleEndTime    *time.Time        `json:"ScheduleEndTime"`
	ScheduleExpression string            `json:"ScheduleExpression"`
	ScheduleOffset     *int64            `json:"ScheduleOffset"`
	ScheduleStartTime  *time.Time        `json:"ScheduleStartTime"`
	Timezone           *string           `json:"Timezone"`
}

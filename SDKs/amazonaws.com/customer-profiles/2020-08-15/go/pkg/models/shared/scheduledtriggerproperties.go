package shared

import (
"time")

type ScheduledTriggerProperties struct {
    DataPullMode *DataPullModeEnum `json:"DataPullMode,omitempty"`
    FirstExecutionFrom *time.Time `json:"FirstExecutionFrom,omitempty"`
    ScheduleEndTime *time.Time `json:"ScheduleEndTime,omitempty"`
    ScheduleExpression string `json:"ScheduleExpression"`
    ScheduleOffset *int64 `json:"ScheduleOffset,omitempty"`
    ScheduleStartTime *time.Time `json:"ScheduleStartTime,omitempty"`
    Timezone *string `json:"Timezone,omitempty"`
    
}


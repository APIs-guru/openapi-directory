package shared

import (
"time")

type ScheduledTriggerProperties struct {
    DataPullMode *DataPullModeEnum `json:"dataPullMode,omitempty"`
    FirstExecutionFrom *time.Time `json:"firstExecutionFrom,omitempty"`
    ScheduleEndTime *time.Time `json:"scheduleEndTime,omitempty"`
    ScheduleExpression string `json:"scheduleExpression"`
    ScheduleOffset *int64 `json:"scheduleOffset,omitempty"`
    ScheduleStartTime *time.Time `json:"scheduleStartTime,omitempty"`
    Timezone *string `json:"timezone,omitempty"`
    
}


package shared

import (
"time")

type ConfigurationRecorderStatus struct {
    LastErrorCode *string `json:"lastErrorCode,omitempty"`
    LastErrorMessage *string `json:"lastErrorMessage,omitempty"`
    LastStartTime *time.Time `json:"lastStartTime,omitempty"`
    LastStatus *RecorderStatusEnum `json:"lastStatus,omitempty"`
    LastStatusChangeTime *time.Time `json:"lastStatusChangeTime,omitempty"`
    LastStopTime *time.Time `json:"lastStopTime,omitempty"`
    Name *string `json:"name,omitempty"`
    Recording *bool `json:"recording,omitempty"`
    
}


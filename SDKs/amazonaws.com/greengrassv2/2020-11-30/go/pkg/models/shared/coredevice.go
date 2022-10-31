package shared

import (
"time")

type CoreDevice struct {
    CoreDeviceThingName *string `json:"coreDeviceThingName,omitempty"`
    LastStatusUpdateTimestamp *time.Time `json:"lastStatusUpdateTimestamp,omitempty"`
    Status *CoreDeviceStatusEnum `json:"status,omitempty"`
    
}


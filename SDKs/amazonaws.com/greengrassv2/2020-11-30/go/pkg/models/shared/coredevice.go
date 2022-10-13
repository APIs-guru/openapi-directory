package shared

import (
	"time"
)

type CoreDevice struct {
	CoreDeviceThingName       *string               `json:"coreDeviceThingName"`
	LastStatusUpdateTimestamp *time.Time            `json:"lastStatusUpdateTimestamp"`
	Status                    *CoreDeviceStatusEnum `json:"status"`
}

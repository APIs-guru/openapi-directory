package shared

import (
	"time"
)

type GetCoreDeviceResponse struct {
	Architecture              *string               `json:"architecture"`
	CoreDeviceThingName       *string               `json:"coreDeviceThingName"`
	CoreVersion               *string               `json:"coreVersion"`
	LastStatusUpdateTimestamp *time.Time            `json:"lastStatusUpdateTimestamp"`
	Platform                  *string               `json:"platform"`
	Status                    *CoreDeviceStatusEnum `json:"status"`
	Tags                      map[string]string     `json:"tags"`
}

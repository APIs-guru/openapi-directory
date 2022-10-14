package shared

import (
	"time"
)

type GetCoreDeviceResponse struct {
	Architecture              *string               `json:"architecture,omitempty"`
	CoreDeviceThingName       *string               `json:"coreDeviceThingName,omitempty"`
	CoreVersion               *string               `json:"coreVersion,omitempty"`
	LastStatusUpdateTimestamp *time.Time            `json:"lastStatusUpdateTimestamp,omitempty"`
	Platform                  *string               `json:"platform,omitempty"`
	Status                    *CoreDeviceStatusEnum `json:"status,omitempty"`
	Tags                      map[string]string     `json:"tags,omitempty"`
}

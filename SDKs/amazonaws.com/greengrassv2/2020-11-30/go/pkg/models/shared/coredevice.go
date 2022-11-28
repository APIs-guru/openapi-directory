package shared

import (
	"time"
)

// CoreDevice
// Contains information about a Greengrass core device, which is an IoT thing that runs the IoT Greengrass Core software.
type CoreDevice struct {
	CoreDeviceThingName       *string               `json:"coreDeviceThingName,omitempty"`
	LastStatusUpdateTimestamp *time.Time            `json:"lastStatusUpdateTimestamp,omitempty"`
	Status                    *CoreDeviceStatusEnum `json:"status,omitempty"`
}

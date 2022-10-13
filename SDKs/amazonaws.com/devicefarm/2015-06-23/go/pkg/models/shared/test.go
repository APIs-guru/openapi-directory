package shared

import (
	"time"
)

type Test struct {
	Arn           *string              `json:"arn"`
	Counters      *Counters            `json:"counters"`
	Created       *time.Time           `json:"created"`
	DeviceMinutes *DeviceMinutes       `json:"deviceMinutes"`
	Message       *string              `json:"message"`
	Name          *string              `json:"name"`
	Result        *ExecutionResultEnum `json:"result"`
	Started       *time.Time           `json:"started"`
	Status        *ExecutionStatusEnum `json:"status"`
	Stopped       *time.Time           `json:"stopped"`
	Type          *TestTypeEnum        `json:"type"`
}

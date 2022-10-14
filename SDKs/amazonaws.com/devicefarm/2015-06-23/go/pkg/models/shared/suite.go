package shared

import (
	"time"
)

type Suite struct {
	Arn           *string              `json:"arn,omitempty"`
	Counters      *Counters            `json:"counters,omitempty"`
	Created       *time.Time           `json:"created,omitempty"`
	DeviceMinutes *DeviceMinutes       `json:"deviceMinutes,omitempty"`
	Message       *string              `json:"message,omitempty"`
	Name          *string              `json:"name,omitempty"`
	Result        *ExecutionResultEnum `json:"result,omitempty"`
	Started       *time.Time           `json:"started,omitempty"`
	Status        *ExecutionStatusEnum `json:"status,omitempty"`
	Stopped       *time.Time           `json:"stopped,omitempty"`
	Type          *TestTypeEnum        `json:"type,omitempty"`
}

package shared

import (
	"time"
)

type Job struct {
	Arn           *string              `json:"arn"`
	Counters      *Counters            `json:"counters"`
	Created       *time.Time           `json:"created"`
	Device        *Device              `json:"device"`
	DeviceMinutes *DeviceMinutes       `json:"deviceMinutes"`
	InstanceArn   *string              `json:"instanceArn"`
	Message       *string              `json:"message"`
	Name          *string              `json:"name"`
	Result        *ExecutionResultEnum `json:"result"`
	Started       *time.Time           `json:"started"`
	Status        *ExecutionStatusEnum `json:"status"`
	Stopped       *time.Time           `json:"stopped"`
	Type          *TestTypeEnum        `json:"type"`
	VideoCapture  *bool                `json:"videoCapture"`
	VideoEndpoint *string              `json:"videoEndpoint"`
}

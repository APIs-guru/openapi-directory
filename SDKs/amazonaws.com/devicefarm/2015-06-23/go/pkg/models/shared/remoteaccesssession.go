package shared

import (
	"time"
)

type RemoteAccessSession struct {
	Arn                 *string              `json:"arn"`
	BillingMethod       *BillingMethodEnum   `json:"billingMethod"`
	ClientID            *string              `json:"clientId"`
	Created             *time.Time           `json:"created"`
	Device              *Device              `json:"device"`
	DeviceMinutes       *DeviceMinutes       `json:"deviceMinutes"`
	DeviceUdid          *string              `json:"deviceUdid"`
	Endpoint            *string              `json:"endpoint"`
	HostAddress         *string              `json:"hostAddress"`
	InstanceArn         *string              `json:"instanceArn"`
	InteractionMode     *InteractionModeEnum `json:"interactionMode"`
	Message             *string              `json:"message"`
	Name                *string              `json:"name"`
	RemoteDebugEnabled  *bool                `json:"remoteDebugEnabled"`
	RemoteRecordAppArn  *string              `json:"remoteRecordAppArn"`
	RemoteRecordEnabled *bool                `json:"remoteRecordEnabled"`
	Result              *ExecutionResultEnum `json:"result"`
	SkipAppResign       *bool                `json:"skipAppResign"`
	Started             *time.Time           `json:"started"`
	Status              *ExecutionStatusEnum `json:"status"`
	Stopped             *time.Time           `json:"stopped"`
}

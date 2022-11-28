package shared

import (
	"time"
)

// RemoteAccessSession
// Represents information about the remote access session.
type RemoteAccessSession struct {
	Arn                 *string              `json:"arn,omitempty"`
	BillingMethod       *BillingMethodEnum   `json:"billingMethod,omitempty"`
	ClientID            *string              `json:"clientId,omitempty"`
	Created             *time.Time           `json:"created,omitempty"`
	Device              *Device              `json:"device,omitempty"`
	DeviceMinutes       *DeviceMinutes       `json:"deviceMinutes,omitempty"`
	DeviceUdid          *string              `json:"deviceUdid,omitempty"`
	Endpoint            *string              `json:"endpoint,omitempty"`
	HostAddress         *string              `json:"hostAddress,omitempty"`
	InstanceArn         *string              `json:"instanceArn,omitempty"`
	InteractionMode     *InteractionModeEnum `json:"interactionMode,omitempty"`
	Message             *string              `json:"message,omitempty"`
	Name                *string              `json:"name,omitempty"`
	RemoteDebugEnabled  *bool                `json:"remoteDebugEnabled,omitempty"`
	RemoteRecordAppArn  *string              `json:"remoteRecordAppArn,omitempty"`
	RemoteRecordEnabled *bool                `json:"remoteRecordEnabled,omitempty"`
	Result              *ExecutionResultEnum `json:"result,omitempty"`
	SkipAppResign       *bool                `json:"skipAppResign,omitempty"`
	Started             *time.Time           `json:"started,omitempty"`
	Status              *ExecutionStatusEnum `json:"status,omitempty"`
	Stopped             *time.Time           `json:"stopped,omitempty"`
}

package shared

import (
	"time"
)

type SecurityConfiguration struct {
	CreatedTimeStamp        *time.Time               `json:"CreatedTimeStamp,omitempty"`
	EncryptionConfiguration *EncryptionConfiguration `json:"EncryptionConfiguration,omitempty"`
	Name                    *string                  `json:"Name,omitempty"`
}

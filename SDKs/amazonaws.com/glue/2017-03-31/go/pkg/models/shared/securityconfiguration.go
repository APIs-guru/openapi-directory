package shared

import (
	"time"
)

type SecurityConfiguration struct {
	CreatedTimeStamp        *time.Time               `json:"CreatedTimeStamp"`
	EncryptionConfiguration *EncryptionConfiguration `json:"EncryptionConfiguration"`
	Name                    *string                  `json:"Name"`
}

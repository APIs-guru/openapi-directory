package shared

import (
	"time"
)

// SecurityConfiguration
// Specifies a security configuration.
type SecurityConfiguration struct {
	CreatedTimeStamp        *time.Time               `json:"CreatedTimeStamp,omitempty"`
	EncryptionConfiguration *EncryptionConfiguration `json:"EncryptionConfiguration,omitempty"`
	Name                    *string                  `json:"Name,omitempty"`
}

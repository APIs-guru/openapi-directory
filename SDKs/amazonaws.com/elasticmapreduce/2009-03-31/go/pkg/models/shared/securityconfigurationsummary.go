package shared

import (
	"time"
)

// SecurityConfigurationSummary
// The creation date and time, and name, of a security configuration.
type SecurityConfigurationSummary struct {
	CreationDateTime *time.Time `json:"CreationDateTime,omitempty"`
	Name             *string    `json:"Name,omitempty"`
}

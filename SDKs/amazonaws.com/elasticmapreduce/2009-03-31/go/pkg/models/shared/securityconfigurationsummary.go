package shared

import (
	"time"
)

type SecurityConfigurationSummary struct {
	CreationDateTime *time.Time `json:"CreationDateTime,omitempty"`
	Name             *string    `json:"Name,omitempty"`
}

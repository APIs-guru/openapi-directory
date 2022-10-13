package shared

import (
	"time"
)

type SecurityConfigurationSummary struct {
	CreationDateTime *time.Time `json:"CreationDateTime"`
	Name             *string    `json:"Name"`
}

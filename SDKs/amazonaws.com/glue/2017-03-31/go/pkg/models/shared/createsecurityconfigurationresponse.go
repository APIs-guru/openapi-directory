package shared

import (
	"time"
)

type CreateSecurityConfigurationResponse struct {
	CreatedTimestamp *time.Time `json:"CreatedTimestamp,omitempty"`
	Name             *string    `json:"Name,omitempty"`
}

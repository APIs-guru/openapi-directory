package shared

import (
	"time"
)

type CreateSecurityConfigurationResponse struct {
	CreatedTimestamp *time.Time `json:"CreatedTimestamp"`
	Name             *string    `json:"Name"`
}

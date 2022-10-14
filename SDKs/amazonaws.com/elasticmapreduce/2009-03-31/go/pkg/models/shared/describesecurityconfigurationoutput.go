package shared

import (
	"time"
)

type DescribeSecurityConfigurationOutput struct {
	CreationDateTime      *time.Time `json:"CreationDateTime,omitempty"`
	Name                  *string    `json:"Name,omitempty"`
	SecurityConfiguration *string    `json:"SecurityConfiguration,omitempty"`
}

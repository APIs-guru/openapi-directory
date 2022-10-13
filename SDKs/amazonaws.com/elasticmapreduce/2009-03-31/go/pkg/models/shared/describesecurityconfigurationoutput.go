package shared

import (
	"time"
)

type DescribeSecurityConfigurationOutput struct {
	CreationDateTime      *time.Time `json:"CreationDateTime"`
	Name                  *string    `json:"Name"`
	SecurityConfiguration *string    `json:"SecurityConfiguration"`
}

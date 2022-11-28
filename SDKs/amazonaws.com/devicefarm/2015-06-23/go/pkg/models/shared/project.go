package shared

import (
	"time"
)

// Project
// Represents an operating-system neutral workspace for running and managing tests.
type Project struct {
	Arn                      *string    `json:"arn,omitempty"`
	Created                  *time.Time `json:"created,omitempty"`
	DefaultJobTimeoutMinutes *int64     `json:"defaultJobTimeoutMinutes,omitempty"`
	Name                     *string    `json:"name,omitempty"`
}

package shared

import (
	"time"
)

type Project struct {
	Arn                      *string    `json:"arn"`
	Created                  *time.Time `json:"created"`
	DefaultJobTimeoutMinutes *int64     `json:"defaultJobTimeoutMinutes"`
	Name                     *string    `json:"name"`
}

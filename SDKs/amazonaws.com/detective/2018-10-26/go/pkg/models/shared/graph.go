package shared

import (
	"time"
)

type Graph struct {
	Arn         *string    `json:"Arn,omitempty"`
	CreatedTime *time.Time `json:"CreatedTime,omitempty"`
}

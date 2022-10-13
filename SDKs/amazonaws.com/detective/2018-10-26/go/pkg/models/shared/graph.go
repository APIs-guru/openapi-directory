package shared

import (
	"time"
)

type Graph struct {
	Arn         *string    `json:"Arn"`
	CreatedTime *time.Time `json:"CreatedTime"`
}

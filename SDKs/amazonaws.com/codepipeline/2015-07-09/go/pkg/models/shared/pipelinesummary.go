package shared

import (
	"time"
)

type PipelineSummary struct {
	Created *time.Time `json:"created"`
	Name    *string    `json:"name"`
	Updated *time.Time `json:"updated"`
	Version *int64     `json:"version"`
}

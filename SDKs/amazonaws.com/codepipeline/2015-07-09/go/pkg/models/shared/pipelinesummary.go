package shared

import (
	"time"
)

type PipelineSummary struct {
	Created *time.Time `json:"created,omitempty"`
	Name    *string    `json:"name,omitempty"`
	Updated *time.Time `json:"updated,omitempty"`
	Version *int64     `json:"version,omitempty"`
}

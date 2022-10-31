package shared

import (
	"time"
)

type WorkGroup struct {
	Configuration *WorkGroupConfiguration `json:"Configuration,omitempty"`
	CreationTime  *time.Time              `json:"CreationTime,omitempty"`
	Description   *string                 `json:"Description,omitempty"`
	Name          string                  `json:"Name"`
	State         *WorkGroupStateEnum     `json:"State,omitempty"`
}

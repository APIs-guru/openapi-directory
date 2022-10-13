package shared

import (
	"time"
)

type WorkGroup struct {
	Configuration *WorkGroupConfiguration `json:"Configuration"`
	CreationTime  *time.Time              `json:"CreationTime"`
	Description   *string                 `json:"Description"`
	Name          string                  `json:"Name"`
	State         *WorkGroupStateEnum     `json:"State"`
}

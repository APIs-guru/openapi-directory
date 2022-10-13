package shared

import (
	"time"
)

type BuildSystemSharedDtoAgentStatus struct {
	LastStatusUpdate *time.Time `json:"LastStatusUpdate" form:"name=LastStatusUpdate"`
	Online           bool       `json:"Online" form:"name=Online"`
}

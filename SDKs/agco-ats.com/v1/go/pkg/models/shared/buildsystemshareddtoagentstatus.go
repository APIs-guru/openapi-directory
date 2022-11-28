package shared

import (
	"time"
)

// BuildSystemSharedDtoAgentStatus
// A DTO for an IAgentStatus
type BuildSystemSharedDtoAgentStatus struct {
	LastStatusUpdate *time.Time `json:"LastStatusUpdate,omitempty" form:"name=LastStatusUpdate"`
	Online           bool       `json:"Online" form:"name=Online"`
}

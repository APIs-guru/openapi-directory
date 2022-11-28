package shared

import (
	"time"
)

// WorkGroupSummary
// The summary information for the workgroup, which includes its name, state, description, and the date and time it was created.
type WorkGroupSummary struct {
	CreationTime  *time.Time          `json:"CreationTime,omitempty"`
	Description   *string             `json:"Description,omitempty"`
	EngineVersion *EngineVersion      `json:"EngineVersion,omitempty"`
	Name          *string             `json:"Name,omitempty"`
	State         *WorkGroupStateEnum `json:"State,omitempty"`
}

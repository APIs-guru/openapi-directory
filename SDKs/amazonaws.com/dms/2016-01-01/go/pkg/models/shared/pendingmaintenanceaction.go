package shared

import (
	"time"
)

type PendingMaintenanceAction struct {
	Action               *string    `json:"Action,omitempty"`
	AutoAppliedAfterDate *time.Time `json:"AutoAppliedAfterDate,omitempty"`
	CurrentApplyDate     *time.Time `json:"CurrentApplyDate,omitempty"`
	Description          *string    `json:"Description,omitempty"`
	ForcedApplyDate      *time.Time `json:"ForcedApplyDate,omitempty"`
	OptInStatus          *string    `json:"OptInStatus,omitempty"`
}

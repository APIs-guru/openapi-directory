package shared

import (
	"time"
)

type PendingMaintenanceAction struct {
	Action               *string    `json:"Action"`
	AutoAppliedAfterDate *time.Time `json:"AutoAppliedAfterDate"`
	CurrentApplyDate     *time.Time `json:"CurrentApplyDate"`
	Description          *string    `json:"Description"`
	ForcedApplyDate      *time.Time `json:"ForcedApplyDate"`
	OptInStatus          *string    `json:"OptInStatus"`
}

package shared

import (
	"time"
)

// PendingMaintenanceAction
// Describes a maintenance action pending for an DMS resource, including when and how it will be applied. This data type is a response element to the <code>DescribePendingMaintenanceActions</code> operation.
type PendingMaintenanceAction struct {
	Action               *string    `json:"Action,omitempty"`
	AutoAppliedAfterDate *time.Time `json:"AutoAppliedAfterDate,omitempty"`
	CurrentApplyDate     *time.Time `json:"CurrentApplyDate,omitempty"`
	Description          *string    `json:"Description,omitempty"`
	ForcedApplyDate      *time.Time `json:"ForcedApplyDate,omitempty"`
	OptInStatus          *string    `json:"OptInStatus,omitempty"`
}

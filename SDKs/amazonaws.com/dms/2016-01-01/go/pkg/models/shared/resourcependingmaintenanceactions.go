package shared

// ResourcePendingMaintenanceActions
// Identifies an DMS resource and any pending actions for it.
type ResourcePendingMaintenanceActions struct {
	PendingMaintenanceActionDetails []PendingMaintenanceAction `json:"PendingMaintenanceActionDetails,omitempty"`
	ResourceIdentifier              *string                    `json:"ResourceIdentifier,omitempty"`
}

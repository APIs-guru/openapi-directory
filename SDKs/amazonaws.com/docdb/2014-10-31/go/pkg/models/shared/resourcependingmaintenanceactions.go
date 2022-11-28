package shared

// ResourcePendingMaintenanceActions
// Represents the output of <a>ApplyPendingMaintenanceAction</a>.
type ResourcePendingMaintenanceActions struct {
	PendingMaintenanceActionDetails []PendingMaintenanceAction
	ResourceIdentifier              *string
}

package shared

// PendingMaintenanceActionsMessage
// Represents the output of <a>DescribePendingMaintenanceActions</a>.
type PendingMaintenanceActionsMessage struct {
	Marker                    *string
	PendingMaintenanceActions []ResourcePendingMaintenanceActions
}

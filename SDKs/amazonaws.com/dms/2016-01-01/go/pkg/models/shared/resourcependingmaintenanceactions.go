package shared

type ResourcePendingMaintenanceActions struct {
	PendingMaintenanceActionDetails []PendingMaintenanceAction `json:"PendingMaintenanceActionDetails"`
	ResourceIdentifier              *string                    `json:"ResourceIdentifier"`
}

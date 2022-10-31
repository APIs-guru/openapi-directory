package shared

type DescribePendingMaintenanceActionsResponse struct {
	Marker                    *string                             `json:"Marker,omitempty"`
	PendingMaintenanceActions []ResourcePendingMaintenanceActions `json:"PendingMaintenanceActions,omitempty"`
}

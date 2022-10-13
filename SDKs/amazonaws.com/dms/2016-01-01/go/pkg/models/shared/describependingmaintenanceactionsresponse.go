package shared

type DescribePendingMaintenanceActionsResponse struct {
	Marker                    *string                             `json:"Marker"`
	PendingMaintenanceActions []ResourcePendingMaintenanceActions `json:"PendingMaintenanceActions"`
}

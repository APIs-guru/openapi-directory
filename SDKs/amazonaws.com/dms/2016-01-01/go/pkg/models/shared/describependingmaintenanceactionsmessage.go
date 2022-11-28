package shared

// DescribePendingMaintenanceActionsMessage
// <p/>
type DescribePendingMaintenanceActionsMessage struct {
	Filters                []Filter `json:"Filters,omitempty"`
	Marker                 *string  `json:"Marker,omitempty"`
	MaxRecords             *int64   `json:"MaxRecords,omitempty"`
	ReplicationInstanceArn *string  `json:"ReplicationInstanceArn,omitempty"`
}

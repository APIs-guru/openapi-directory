package shared

type DescribePendingMaintenanceActionsMessage struct {
	Filters                []Filter `json:"Filters"`
	Marker                 *string  `json:"Marker"`
	MaxRecords             *int64   `json:"MaxRecords"`
	ReplicationInstanceArn *string  `json:"ReplicationInstanceArn"`
}

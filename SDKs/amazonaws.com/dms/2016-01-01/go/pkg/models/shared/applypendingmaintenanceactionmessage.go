package shared

// ApplyPendingMaintenanceActionMessage
// <p/>
type ApplyPendingMaintenanceActionMessage struct {
	ApplyAction            string `json:"ApplyAction"`
	OptInType              string `json:"OptInType"`
	ReplicationInstanceArn string `json:"ReplicationInstanceArn"`
}

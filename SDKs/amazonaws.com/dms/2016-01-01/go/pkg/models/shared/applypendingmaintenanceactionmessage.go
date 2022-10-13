package shared

type ApplyPendingMaintenanceActionMessage struct {
	ApplyAction            string `json:"ApplyAction"`
	OptInType              string `json:"OptInType"`
	ReplicationInstanceArn string `json:"ReplicationInstanceArn"`
}

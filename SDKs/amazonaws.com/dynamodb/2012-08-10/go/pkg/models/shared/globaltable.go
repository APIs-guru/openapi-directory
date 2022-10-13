package shared

type GlobalTable struct {
	GlobalTableName  *string   `json:"GlobalTableName"`
	ReplicationGroup []Replica `json:"ReplicationGroup"`
}

package shared

type GlobalTable struct {
	GlobalTableName  *string   `json:"GlobalTableName,omitempty"`
	ReplicationGroup []Replica `json:"ReplicationGroup,omitempty"`
}

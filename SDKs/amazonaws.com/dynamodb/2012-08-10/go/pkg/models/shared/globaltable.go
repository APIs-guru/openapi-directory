package shared

// GlobalTable
// Represents the properties of a global table.
type GlobalTable struct {
	GlobalTableName  *string   `json:"GlobalTableName,omitempty"`
	ReplicationGroup []Replica `json:"ReplicationGroup,omitempty"`
}

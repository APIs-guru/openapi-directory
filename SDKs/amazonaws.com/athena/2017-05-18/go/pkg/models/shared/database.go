package shared

// Database
// Contains metadata information for a database in a data catalog.
type Database struct {
	Description *string           `json:"Description,omitempty"`
	Name        string            `json:"Name"`
	Parameters  map[string]string `json:"Parameters,omitempty"`
}

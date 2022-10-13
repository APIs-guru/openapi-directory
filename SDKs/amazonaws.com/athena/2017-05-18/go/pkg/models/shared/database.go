package shared

type Database struct {
	Description *string           `json:"Description"`
	Name        string            `json:"Name"`
	Parameters  map[string]string `json:"Parameters"`
}

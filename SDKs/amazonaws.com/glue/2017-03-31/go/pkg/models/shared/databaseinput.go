package shared

// DatabaseInput
// The structure used to create or update a database.
type DatabaseInput struct {
	CreateTableDefaultPermissions []PrincipalPermissions `json:"CreateTableDefaultPermissions,omitempty"`
	Description                   *string                `json:"Description,omitempty"`
	LocationURI                   *string                `json:"LocationUri,omitempty"`
	Name                          string                 `json:"Name"`
	Parameters                    map[string]string      `json:"Parameters,omitempty"`
	TargetDatabase                *DatabaseIdentifier    `json:"TargetDatabase,omitempty"`
}

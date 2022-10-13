package shared

type DatabaseInput struct {
	CreateTableDefaultPermissions []PrincipalPermissions `json:"CreateTableDefaultPermissions"`
	Description                   *string                `json:"Description"`
	LocationURI                   *string                `json:"LocationUri"`
	Name                          string                 `json:"Name"`
	Parameters                    map[string]string      `json:"Parameters"`
	TargetDatabase                *DatabaseIdentifier    `json:"TargetDatabase"`
}

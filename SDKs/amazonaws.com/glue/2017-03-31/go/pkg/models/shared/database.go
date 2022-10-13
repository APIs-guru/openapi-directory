package shared

import (
	"time"
)

type Database struct {
	CatalogID                     *string                `json:"CatalogId"`
	CreateTableDefaultPermissions []PrincipalPermissions `json:"CreateTableDefaultPermissions"`
	CreateTime                    *time.Time             `json:"CreateTime"`
	Description                   *string                `json:"Description"`
	LocationURI                   *string                `json:"LocationUri"`
	Name                          string                 `json:"Name"`
	Parameters                    map[string]string      `json:"Parameters"`
	TargetDatabase                *DatabaseIdentifier    `json:"TargetDatabase"`
}

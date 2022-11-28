package shared

import (
	"time"
)

// Database
// The <code>Database</code> object represents a logical grouping of tables that might reside in a Hive metastore or an RDBMS.
type Database struct {
	CatalogID                     *string                `json:"CatalogId,omitempty"`
	CreateTableDefaultPermissions []PrincipalPermissions `json:"CreateTableDefaultPermissions,omitempty"`
	CreateTime                    *time.Time             `json:"CreateTime,omitempty"`
	Description                   *string                `json:"Description,omitempty"`
	LocationURI                   *string                `json:"LocationUri,omitempty"`
	Name                          string                 `json:"Name"`
	Parameters                    map[string]string      `json:"Parameters,omitempty"`
	TargetDatabase                *DatabaseIdentifier    `json:"TargetDatabase,omitempty"`
}

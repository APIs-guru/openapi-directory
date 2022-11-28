package shared

import (
	"time"
)

// CatalogImportStatus
// A structure containing migration status information.
type CatalogImportStatus struct {
	ImportCompleted *bool      `json:"ImportCompleted,omitempty"`
	ImportTime      *time.Time `json:"ImportTime,omitempty"`
	ImportedBy      *string    `json:"ImportedBy,omitempty"`
}

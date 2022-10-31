package shared

import (
	"time"
)

type CatalogImportStatus struct {
	ImportCompleted *bool      `json:"ImportCompleted,omitempty"`
	ImportTime      *time.Time `json:"ImportTime,omitempty"`
	ImportedBy      *string    `json:"ImportedBy,omitempty"`
}

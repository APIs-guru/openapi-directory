package shared

import (
	"time"
)

type CatalogImportStatus struct {
	ImportCompleted *bool      `json:"ImportCompleted"`
	ImportTime      *time.Time `json:"ImportTime"`
	ImportedBy      *string    `json:"ImportedBy"`
}

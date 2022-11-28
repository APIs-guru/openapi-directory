package shared

import (
	"time"
)

// TableDataImportJobMetadata
// The metadata associated with the table data import job that was submitted.
type TableDataImportJobMetadata struct {
	DataSource    ImportDataSource   `json:"dataSource"`
	ImportOptions ImportOptions      `json:"importOptions"`
	SubmitTime    time.Time          `json:"submitTime"`
	Submitter     ImportJobSubmitter `json:"submitter"`
}

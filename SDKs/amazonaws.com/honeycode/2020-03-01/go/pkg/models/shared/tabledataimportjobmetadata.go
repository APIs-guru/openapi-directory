package shared

import (
	"time"
)

type TableDataImportJobMetadata struct {
	DataSource    ImportDataSource   `json:"dataSource"`
	ImportOptions ImportOptions      `json:"importOptions"`
	SubmitTime    time.Time          `json:"submitTime"`
	Submitter     ImportJobSubmitter `json:"submitter"`
}

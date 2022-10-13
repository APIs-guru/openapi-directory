package shared

import (
	"time"
)

type ExportInfo struct {
	ConfigurationsDownloadURL *string          `json:"configurationsDownloadUrl"`
	ExportID                  string           `json:"exportId"`
	ExportRequestTime         time.Time        `json:"exportRequestTime"`
	ExportStatus              ExportStatusEnum `json:"exportStatus"`
	IsTruncated               *bool            `json:"isTruncated"`
	RequestedEndTime          *time.Time       `json:"requestedEndTime"`
	RequestedStartTime        *time.Time       `json:"requestedStartTime"`
	StatusMessage             string           `json:"statusMessage"`
}

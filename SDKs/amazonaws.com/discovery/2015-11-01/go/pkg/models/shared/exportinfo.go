package shared

import (
	"time"
)

type ExportInfo struct {
	ConfigurationsDownloadURL *string          `json:"configurationsDownloadUrl,omitempty"`
	ExportID                  string           `json:"exportId"`
	ExportRequestTime         time.Time        `json:"exportRequestTime"`
	ExportStatus              ExportStatusEnum `json:"exportStatus"`
	IsTruncated               *bool            `json:"isTruncated,omitempty"`
	RequestedEndTime          *time.Time       `json:"requestedEndTime,omitempty"`
	RequestedStartTime        *time.Time       `json:"requestedStartTime,omitempty"`
	StatusMessage             string           `json:"statusMessage"`
}

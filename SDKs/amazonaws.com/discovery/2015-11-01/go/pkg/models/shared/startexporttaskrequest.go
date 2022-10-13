package shared

import (
	"time"
)

type StartExportTaskRequest struct {
	EndTime          *time.Time             `json:"endTime"`
	ExportDataFormat []ExportDataFormatEnum `json:"exportDataFormat"`
	Filters          []ExportFilter         `json:"filters"`
	StartTime        *time.Time             `json:"startTime"`
}

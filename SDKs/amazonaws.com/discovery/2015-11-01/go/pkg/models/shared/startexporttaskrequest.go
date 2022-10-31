package shared

import (
"time")

type StartExportTaskRequest struct {
    EndTime *time.Time `json:"endTime,omitempty"`
    ExportDataFormat []ExportDataFormatEnum `json:"exportDataFormat,omitempty"`
    Filters []ExportFilter `json:"filters,omitempty"`
    StartTime *time.Time `json:"startTime,omitempty"`
    
}


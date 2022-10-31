package shared

import (
"time")

type ReportGroup struct {
    Arn *string `json:"arn,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    ExportConfig *ReportExportConfig `json:"exportConfig,omitempty"`
    LastModified *time.Time `json:"lastModified,omitempty"`
    Name *string `json:"name,omitempty"`
    Status *ReportGroupStatusTypeEnum `json:"status,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    Type *ReportTypeEnum `json:"type,omitempty"`
    
}


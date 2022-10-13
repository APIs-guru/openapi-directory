package shared

import (
	"time"
)

type ReportGroup struct {
	Arn          *string                    `json:"arn"`
	Created      *time.Time                 `json:"created"`
	ExportConfig *ReportExportConfig        `json:"exportConfig"`
	LastModified *time.Time                 `json:"lastModified"`
	Name         *string                    `json:"name"`
	Status       *ReportGroupStatusTypeEnum `json:"status"`
	Tags         []Tag                      `json:"tags"`
	Type         *ReportTypeEnum            `json:"type"`
}

package shared

import (
	"time"
)

// ReportGroup
// A series of reports. Each report contains information about the results from running a series of test cases. You specify the test cases for a report group in the buildspec for a build project using one or more paths to the test case files.
type ReportGroup struct {
	Arn          *string                    `json:"arn,omitempty"`
	Created      *time.Time                 `json:"created,omitempty"`
	ExportConfig *ReportExportConfig        `json:"exportConfig,omitempty"`
	LastModified *time.Time                 `json:"lastModified,omitempty"`
	Name         *string                    `json:"name,omitempty"`
	Status       *ReportGroupStatusTypeEnum `json:"status,omitempty"`
	Tags         []Tag                      `json:"tags,omitempty"`
	Type         *ReportTypeEnum            `json:"type,omitempty"`
}

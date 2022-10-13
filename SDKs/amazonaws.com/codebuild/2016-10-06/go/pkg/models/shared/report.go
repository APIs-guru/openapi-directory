package shared

import (
	"time"
)

type Report struct {
	Arn                 *string                    `json:"arn"`
	CodeCoverageSummary *CodeCoverageReportSummary `json:"codeCoverageSummary"`
	Created             *time.Time                 `json:"created"`
	ExecutionID         *string                    `json:"executionId"`
	Expired             *time.Time                 `json:"expired"`
	ExportConfig        *ReportExportConfig        `json:"exportConfig"`
	Name                *string                    `json:"name"`
	ReportGroupArn      *string                    `json:"reportGroupArn"`
	Status              *ReportStatusTypeEnum      `json:"status"`
	TestSummary         *TestReportSummary         `json:"testSummary"`
	Truncated           *bool                      `json:"truncated"`
	Type                *ReportTypeEnum            `json:"type"`
}

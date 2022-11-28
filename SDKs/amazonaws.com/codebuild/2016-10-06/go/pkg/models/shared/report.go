package shared

import (
	"time"
)

// Report
// Information about the results from running a series of test cases during the run of a build project. The test cases are specified in the buildspec for the build project using one or more paths to the test case files. You can specify any type of tests you want, such as unit tests, integration tests, and functional tests.
type Report struct {
	Arn                 *string                    `json:"arn,omitempty"`
	CodeCoverageSummary *CodeCoverageReportSummary `json:"codeCoverageSummary,omitempty"`
	Created             *time.Time                 `json:"created,omitempty"`
	ExecutionID         *string                    `json:"executionId,omitempty"`
	Expired             *time.Time                 `json:"expired,omitempty"`
	ExportConfig        *ReportExportConfig        `json:"exportConfig,omitempty"`
	Name                *string                    `json:"name,omitempty"`
	ReportGroupArn      *string                    `json:"reportGroupArn,omitempty"`
	Status              *ReportStatusTypeEnum      `json:"status,omitempty"`
	TestSummary         *TestReportSummary         `json:"testSummary,omitempty"`
	Truncated           *bool                      `json:"truncated,omitempty"`
	Type                *ReportTypeEnum            `json:"type,omitempty"`
}

package shared

import (
"time")

type Report struct {
    Arn *string `json:"arn,omitempty"`
    CodeCoverageSummary *CodeCoverageReportSummary `json:"codeCoverageSummary,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    ExecutionID *string `json:"executionId,omitempty"`
    Expired *time.Time `json:"expired,omitempty"`
    ExportConfig *ReportExportConfig `json:"exportConfig,omitempty"`
    Name *string `json:"name,omitempty"`
    ReportGroupArn *string `json:"reportGroupArn,omitempty"`
    Status *ReportStatusTypeEnum `json:"status,omitempty"`
    TestSummary *TestReportSummary `json:"testSummary,omitempty"`
    Truncated *bool `json:"truncated,omitempty"`
    Type *ReportTypeEnum `json:"type,omitempty"`
    
}


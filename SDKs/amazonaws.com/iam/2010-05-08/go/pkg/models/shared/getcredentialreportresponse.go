package shared

import (
	"time"
)

// GetCredentialReportResponse
// Contains the response to a successful <a>GetCredentialReport</a> request.
type GetCredentialReportResponse struct {
	Content       *string
	GeneratedTime *time.Time
	ReportFormat  *ReportFormatTypeEnum
}

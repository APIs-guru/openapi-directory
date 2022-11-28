package shared

// GenerateCredentialReportResponse
// Contains the response to a successful <a>GenerateCredentialReport</a> request.
type GenerateCredentialReportResponse struct {
	Description *string
	State       *ReportStateTypeEnum
}

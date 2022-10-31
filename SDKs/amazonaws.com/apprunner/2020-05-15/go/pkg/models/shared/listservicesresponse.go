package shared

type ListServicesResponse struct {
	NextToken          *string          `json:"NextToken,omitempty"`
	ServiceSummaryList []ServiceSummary `json:"ServiceSummaryList"`
}

package shared

type ListServicesResponse struct {
	NextToken          *string          `json:"NextToken"`
	ServiceSummaryList []ServiceSummary `json:"ServiceSummaryList"`
}

package shared

type ListOperationsResponse struct {
	NextToken            *string            `json:"NextToken"`
	OperationSummaryList []OperationSummary `json:"OperationSummaryList"`
}

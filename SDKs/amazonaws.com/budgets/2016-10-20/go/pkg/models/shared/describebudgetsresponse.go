package shared

// DescribeBudgetsResponse
//
//	Response of DescribeBudgets
type DescribeBudgetsResponse struct {
	Budgets   []Budget `json:"Budgets,omitempty"`
	NextToken *string  `json:"NextToken,omitempty"`
}

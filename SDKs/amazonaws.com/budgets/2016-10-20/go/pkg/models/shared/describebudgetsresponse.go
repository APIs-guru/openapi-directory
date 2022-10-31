package shared

type DescribeBudgetsResponse struct {
	Budgets   []Budget `json:"Budgets,omitempty"`
	NextToken *string  `json:"NextToken,omitempty"`
}

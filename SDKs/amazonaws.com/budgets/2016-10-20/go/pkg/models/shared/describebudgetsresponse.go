package shared

type DescribeBudgetsResponse struct {
	Budgets   []Budget `json:"Budgets"`
	NextToken *string  `json:"NextToken"`
}

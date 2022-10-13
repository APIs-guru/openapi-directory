package shared

type DescribeBudgetActionsForBudgetResponse struct {
	Actions   []Action `json:"Actions"`
	NextToken *string  `json:"NextToken"`
}

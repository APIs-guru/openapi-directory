package shared

type BudgetedAndActualAmounts struct {
	ActualAmount   *Spend      `json:"ActualAmount"`
	BudgetedAmount *Spend      `json:"BudgetedAmount"`
	TimePeriod     *TimePeriod `json:"TimePeriod"`
}

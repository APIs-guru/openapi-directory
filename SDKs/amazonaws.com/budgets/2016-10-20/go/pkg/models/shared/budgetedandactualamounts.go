package shared

// BudgetedAndActualAmounts
// The amount of cost or usage that you created the budget for, compared to your actual costs or usage.
type BudgetedAndActualAmounts struct {
	ActualAmount   *Spend      `json:"ActualAmount,omitempty"`
	BudgetedAmount *Spend      `json:"BudgetedAmount,omitempty"`
	TimePeriod     *TimePeriod `json:"TimePeriod,omitempty"`
}

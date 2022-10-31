package shared

type BudgetedAndActualAmounts struct {
	ActualAmount   *Spend      `json:"ActualAmount,omitempty"`
	BudgetedAmount *Spend      `json:"BudgetedAmount,omitempty"`
	TimePeriod     *TimePeriod `json:"TimePeriod,omitempty"`
}

package shared

// BudgetPerformanceHistory
// A history of the state of a budget at the end of the budget's specified time period.
type BudgetPerformanceHistory struct {
	BudgetName                   *string                    `json:"BudgetName,omitempty"`
	BudgetType                   *BudgetTypeEnum            `json:"BudgetType,omitempty"`
	BudgetedAndActualAmountsList []BudgetedAndActualAmounts `json:"BudgetedAndActualAmountsList,omitempty"`
	CostFilters                  map[string][]string        `json:"CostFilters,omitempty"`
	CostTypes                    *CostTypes                 `json:"CostTypes,omitempty"`
	TimeUnit                     *TimeUnitEnum              `json:"TimeUnit,omitempty"`
}

package shared

type BudgetPerformanceHistory struct {
	BudgetName                   *string                    `json:"BudgetName"`
	BudgetType                   *BudgetTypeEnum            `json:"BudgetType"`
	BudgetedAndActualAmountsList []BudgetedAndActualAmounts `json:"BudgetedAndActualAmountsList"`
	CostFilters                  map[string][]string        `json:"CostFilters"`
	CostTypes                    *CostTypes                 `json:"CostTypes"`
	TimeUnit                     *TimeUnitEnum              `json:"TimeUnit"`
}

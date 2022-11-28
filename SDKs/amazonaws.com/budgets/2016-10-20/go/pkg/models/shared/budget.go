package shared

import (
	"time"
)

// Budget
// <p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p> <p>This is the ARN pattern for a budget: </p> <p> <code>arn:aws:budgets::AccountId:budget/budgetName</code> </p>
type Budget struct {
	BudgetLimit         *Spend              `json:"BudgetLimit,omitempty"`
	BudgetName          string              `json:"BudgetName"`
	BudgetType          BudgetTypeEnum      `json:"BudgetType"`
	CalculatedSpend     *CalculatedSpend    `json:"CalculatedSpend,omitempty"`
	CostFilters         map[string][]string `json:"CostFilters,omitempty"`
	CostTypes           *CostTypes          `json:"CostTypes,omitempty"`
	LastUpdatedTime     *time.Time          `json:"LastUpdatedTime,omitempty"`
	PlannedBudgetLimits map[string]Spend    `json:"PlannedBudgetLimits,omitempty"`
	TimePeriod          *TimePeriod         `json:"TimePeriod,omitempty"`
	TimeUnit            TimeUnitEnum        `json:"TimeUnit"`
}

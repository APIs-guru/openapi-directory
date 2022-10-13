package shared

import (
	"time"
)

type Budget struct {
	BudgetLimit         *Spend              `json:"BudgetLimit"`
	BudgetName          string              `json:"BudgetName"`
	BudgetType          BudgetTypeEnum      `json:"BudgetType"`
	CalculatedSpend     *CalculatedSpend    `json:"CalculatedSpend"`
	CostFilters         map[string][]string `json:"CostFilters"`
	CostTypes           *CostTypes          `json:"CostTypes"`
	LastUpdatedTime     *time.Time          `json:"LastUpdatedTime"`
	PlannedBudgetLimits map[string]Spend    `json:"PlannedBudgetLimits"`
	TimePeriod          *TimePeriod         `json:"TimePeriod"`
	TimeUnit            TimeUnitEnum        `json:"TimeUnit"`
}

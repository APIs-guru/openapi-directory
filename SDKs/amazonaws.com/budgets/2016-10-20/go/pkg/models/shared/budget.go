package shared

import (
"time")

type Budget struct {
    BudgetLimit *Spend `json:"BudgetLimit,omitempty"`
    BudgetName string `json:"BudgetName"`
    BudgetType BudgetTypeEnum `json:"BudgetType"`
    CalculatedSpend *CalculatedSpend `json:"CalculatedSpend,omitempty"`
    CostFilters map[string][]string `json:"CostFilters,omitempty"`
    CostTypes *CostTypes `json:"CostTypes,omitempty"`
    LastUpdatedTime *time.Time `json:"LastUpdatedTime,omitempty"`
    PlannedBudgetLimits map[string]Spend `json:"PlannedBudgetLimits,omitempty"`
    TimePeriod *TimePeriod `json:"TimePeriod,omitempty"`
    TimeUnit TimeUnitEnum `json:"TimeUnit"`
    
}


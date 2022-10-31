package shared




type BudgetTypeEnum string

const (
    BudgetTypeEnumUsage BudgetTypeEnum = "USAGE"
BudgetTypeEnumCost BudgetTypeEnum = "COST"
BudgetTypeEnumRiUtilization BudgetTypeEnum = "RI_UTILIZATION"
BudgetTypeEnumRiCoverage BudgetTypeEnum = "RI_COVERAGE"
BudgetTypeEnumSavingsPlansUtilization BudgetTypeEnum = "SAVINGS_PLANS_UTILIZATION"
BudgetTypeEnumSavingsPlansCoverage BudgetTypeEnum = "SAVINGS_PLANS_COVERAGE"
)



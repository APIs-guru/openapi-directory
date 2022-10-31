package shared




type ExecutionTypeEnum string

const (
    ExecutionTypeEnumApproveBudgetAction ExecutionTypeEnum = "APPROVE_BUDGET_ACTION"
ExecutionTypeEnumRetryBudgetAction ExecutionTypeEnum = "RETRY_BUDGET_ACTION"
ExecutionTypeEnumReverseBudgetAction ExecutionTypeEnum = "REVERSE_BUDGET_ACTION"
ExecutionTypeEnumResetBudgetAction ExecutionTypeEnum = "RESET_BUDGET_ACTION"
)



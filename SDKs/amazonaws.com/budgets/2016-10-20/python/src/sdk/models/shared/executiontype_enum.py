from dataclasses import dataclass, field
from enum import Enum

class ExecutionTypeEnum(str, Enum):
    APPROVE_BUDGET_ACTION = "APPROVE_BUDGET_ACTION"
    RETRY_BUDGET_ACTION = "RETRY_BUDGET_ACTION"
    REVERSE_BUDGET_ACTION = "REVERSE_BUDGET_ACTION"
    RESET_BUDGET_ACTION = "RESET_BUDGET_ACTION"


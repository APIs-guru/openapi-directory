from dataclasses import dataclass, field
from enum import Enum

class BudgetTypeEnum(str, Enum):
    USAGE = "USAGE"
    COST = "COST"
    RI_UTILIZATION = "RI_UTILIZATION"
    RI_COVERAGE = "RI_COVERAGE"
    SAVINGS_PLANS_UTILIZATION = "SAVINGS_PLANS_UTILIZATION"
    SAVINGS_PLANS_COVERAGE = "SAVINGS_PLANS_COVERAGE"


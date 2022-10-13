from dataclasses import dataclass, field
from typing import Enum

class OptimizationMetricEnum(str, Enum):
    WAPE = "WAPE"
    RMSE = "RMSE"
    AVERAGE_WEIGHTED_QUANTILE_LOSS = "AverageWeightedQuantileLoss"
    MASE = "MASE"
    MAPE = "MAPE"


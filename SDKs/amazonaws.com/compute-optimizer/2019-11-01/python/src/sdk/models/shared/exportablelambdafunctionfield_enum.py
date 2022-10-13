from dataclasses import dataclass, field
from typing import Enum

class ExportableLambdaFunctionFieldEnum(str, Enum):
    ACCOUNT_ID = "AccountId"
    FUNCTION_ARN = "FunctionArn"
    FUNCTION_VERSION = "FunctionVersion"
    FINDING = "Finding"
    FINDING_REASON_CODES = "FindingReasonCodes"
    NUMBER_OF_INVOCATIONS = "NumberOfInvocations"
    UTILIZATION_METRICS_DURATION_MAXIMUM = "UtilizationMetricsDurationMaximum"
    UTILIZATION_METRICS_DURATION_AVERAGE = "UtilizationMetricsDurationAverage"
    UTILIZATION_METRICS_MEMORY_MAXIMUM = "UtilizationMetricsMemoryMaximum"
    UTILIZATION_METRICS_MEMORY_AVERAGE = "UtilizationMetricsMemoryAverage"
    LOOKBACK_PERIOD_IN_DAYS = "LookbackPeriodInDays"
    CURRENT_CONFIGURATION_MEMORY_SIZE = "CurrentConfigurationMemorySize"
    CURRENT_CONFIGURATION_TIMEOUT = "CurrentConfigurationTimeout"
    CURRENT_COST_TOTAL = "CurrentCostTotal"
    CURRENT_COST_AVERAGE = "CurrentCostAverage"
    RECOMMENDATION_OPTIONS_CONFIGURATION_MEMORY_SIZE = "RecommendationOptionsConfigurationMemorySize"
    RECOMMENDATION_OPTIONS_COST_LOW = "RecommendationOptionsCostLow"
    RECOMMENDATION_OPTIONS_COST_HIGH = "RecommendationOptionsCostHigh"
    RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_DURATION_LOWER_BOUND = "RecommendationOptionsProjectedUtilizationMetricsDurationLowerBound"
    RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_DURATION_UPPER_BOUND = "RecommendationOptionsProjectedUtilizationMetricsDurationUpperBound"
    RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_DURATION_EXPECTED = "RecommendationOptionsProjectedUtilizationMetricsDurationExpected"
    LAST_REFRESH_TIMESTAMP = "LastRefreshTimestamp"


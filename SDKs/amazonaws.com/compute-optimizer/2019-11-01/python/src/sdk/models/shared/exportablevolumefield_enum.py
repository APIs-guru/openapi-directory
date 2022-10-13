from dataclasses import dataclass, field
from typing import Enum

class ExportableVolumeFieldEnum(str, Enum):
    ACCOUNT_ID = "AccountId"
    VOLUME_ARN = "VolumeArn"
    FINDING = "Finding"
    UTILIZATION_METRICS_VOLUME_READ_OPS_PER_SECOND_MAXIMUM = "UtilizationMetricsVolumeReadOpsPerSecondMaximum"
    UTILIZATION_METRICS_VOLUME_WRITE_OPS_PER_SECOND_MAXIMUM = "UtilizationMetricsVolumeWriteOpsPerSecondMaximum"
    UTILIZATION_METRICS_VOLUME_READ_BYTES_PER_SECOND_MAXIMUM = "UtilizationMetricsVolumeReadBytesPerSecondMaximum"
    UTILIZATION_METRICS_VOLUME_WRITE_BYTES_PER_SECOND_MAXIMUM = "UtilizationMetricsVolumeWriteBytesPerSecondMaximum"
    LOOKBACK_PERIOD_IN_DAYS = "LookbackPeriodInDays"
    CURRENT_CONFIGURATION_VOLUME_TYPE = "CurrentConfigurationVolumeType"
    CURRENT_CONFIGURATION_VOLUME_BASELINE_IOPS = "CurrentConfigurationVolumeBaselineIOPS"
    CURRENT_CONFIGURATION_VOLUME_BASELINE_THROUGHPUT = "CurrentConfigurationVolumeBaselineThroughput"
    CURRENT_CONFIGURATION_VOLUME_BURST_IOPS = "CurrentConfigurationVolumeBurstIOPS"
    CURRENT_CONFIGURATION_VOLUME_BURST_THROUGHPUT = "CurrentConfigurationVolumeBurstThroughput"
    CURRENT_CONFIGURATION_VOLUME_SIZE = "CurrentConfigurationVolumeSize"
    CURRENT_MONTHLY_PRICE = "CurrentMonthlyPrice"
    RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_TYPE = "RecommendationOptionsConfigurationVolumeType"
    RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BASELINE_IOPS = "RecommendationOptionsConfigurationVolumeBaselineIOPS"
    RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BASELINE_THROUGHPUT = "RecommendationOptionsConfigurationVolumeBaselineThroughput"
    RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BURST_IOPS = "RecommendationOptionsConfigurationVolumeBurstIOPS"
    RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BURST_THROUGHPUT = "RecommendationOptionsConfigurationVolumeBurstThroughput"
    RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_SIZE = "RecommendationOptionsConfigurationVolumeSize"
    RECOMMENDATION_OPTIONS_MONTHLY_PRICE = "RecommendationOptionsMonthlyPrice"
    RECOMMENDATION_OPTIONS_PERFORMANCE_RISK = "RecommendationOptionsPerformanceRisk"
    LAST_REFRESH_TIMESTAMP = "LastRefreshTimestamp"


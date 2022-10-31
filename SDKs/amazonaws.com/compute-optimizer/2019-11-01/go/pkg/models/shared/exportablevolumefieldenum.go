package shared

type ExportableVolumeFieldEnum string

const (
	ExportableVolumeFieldEnumAccountID                                                  ExportableVolumeFieldEnum = "AccountId"
	ExportableVolumeFieldEnumVolumeArn                                                  ExportableVolumeFieldEnum = "VolumeArn"
	ExportableVolumeFieldEnumFinding                                                    ExportableVolumeFieldEnum = "Finding"
	ExportableVolumeFieldEnumUtilizationMetricsVolumeReadOpsPerSecondMaximum            ExportableVolumeFieldEnum = "UtilizationMetricsVolumeReadOpsPerSecondMaximum"
	ExportableVolumeFieldEnumUtilizationMetricsVolumeWriteOpsPerSecondMaximum           ExportableVolumeFieldEnum = "UtilizationMetricsVolumeWriteOpsPerSecondMaximum"
	ExportableVolumeFieldEnumUtilizationMetricsVolumeReadBytesPerSecondMaximum          ExportableVolumeFieldEnum = "UtilizationMetricsVolumeReadBytesPerSecondMaximum"
	ExportableVolumeFieldEnumUtilizationMetricsVolumeWriteBytesPerSecondMaximum         ExportableVolumeFieldEnum = "UtilizationMetricsVolumeWriteBytesPerSecondMaximum"
	ExportableVolumeFieldEnumLookbackPeriodInDays                                       ExportableVolumeFieldEnum = "LookbackPeriodInDays"
	ExportableVolumeFieldEnumCurrentConfigurationVolumeType                             ExportableVolumeFieldEnum = "CurrentConfigurationVolumeType"
	ExportableVolumeFieldEnumCurrentConfigurationVolumeBaselineIops                     ExportableVolumeFieldEnum = "CurrentConfigurationVolumeBaselineIOPS"
	ExportableVolumeFieldEnumCurrentConfigurationVolumeBaselineThroughput               ExportableVolumeFieldEnum = "CurrentConfigurationVolumeBaselineThroughput"
	ExportableVolumeFieldEnumCurrentConfigurationVolumeBurstIops                        ExportableVolumeFieldEnum = "CurrentConfigurationVolumeBurstIOPS"
	ExportableVolumeFieldEnumCurrentConfigurationVolumeBurstThroughput                  ExportableVolumeFieldEnum = "CurrentConfigurationVolumeBurstThroughput"
	ExportableVolumeFieldEnumCurrentConfigurationVolumeSize                             ExportableVolumeFieldEnum = "CurrentConfigurationVolumeSize"
	ExportableVolumeFieldEnumCurrentMonthlyPrice                                        ExportableVolumeFieldEnum = "CurrentMonthlyPrice"
	ExportableVolumeFieldEnumRecommendationOptionsConfigurationVolumeType               ExportableVolumeFieldEnum = "RecommendationOptionsConfigurationVolumeType"
	ExportableVolumeFieldEnumRecommendationOptionsConfigurationVolumeBaselineIops       ExportableVolumeFieldEnum = "RecommendationOptionsConfigurationVolumeBaselineIOPS"
	ExportableVolumeFieldEnumRecommendationOptionsConfigurationVolumeBaselineThroughput ExportableVolumeFieldEnum = "RecommendationOptionsConfigurationVolumeBaselineThroughput"
	ExportableVolumeFieldEnumRecommendationOptionsConfigurationVolumeBurstIops          ExportableVolumeFieldEnum = "RecommendationOptionsConfigurationVolumeBurstIOPS"
	ExportableVolumeFieldEnumRecommendationOptionsConfigurationVolumeBurstThroughput    ExportableVolumeFieldEnum = "RecommendationOptionsConfigurationVolumeBurstThroughput"
	ExportableVolumeFieldEnumRecommendationOptionsConfigurationVolumeSize               ExportableVolumeFieldEnum = "RecommendationOptionsConfigurationVolumeSize"
	ExportableVolumeFieldEnumRecommendationOptionsMonthlyPrice                          ExportableVolumeFieldEnum = "RecommendationOptionsMonthlyPrice"
	ExportableVolumeFieldEnumRecommendationOptionsPerformanceRisk                       ExportableVolumeFieldEnum = "RecommendationOptionsPerformanceRisk"
	ExportableVolumeFieldEnumLastRefreshTimestamp                                       ExportableVolumeFieldEnum = "LastRefreshTimestamp"
)

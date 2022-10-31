package shared

import (
"time")

type LambdaFunctionRecommendation struct {
    AccountID *string `json:"accountId,omitempty"`
    CurrentMemorySize *int64 `json:"currentMemorySize,omitempty"`
    Finding *LambdaFunctionRecommendationFindingEnum `json:"finding,omitempty"`
    FindingReasonCodes []LambdaFunctionRecommendationFindingReasonCodeEnum `json:"findingReasonCodes,omitempty"`
    FunctionArn *string `json:"functionArn,omitempty"`
    FunctionVersion *string `json:"functionVersion,omitempty"`
    LastRefreshTimestamp *time.Time `json:"lastRefreshTimestamp,omitempty"`
    LookbackPeriodInDays *float64 `json:"lookbackPeriodInDays,omitempty"`
    MemorySizeRecommendationOptions []LambdaFunctionMemoryRecommendationOption `json:"memorySizeRecommendationOptions,omitempty"`
    NumberOfInvocations *int64 `json:"numberOfInvocations,omitempty"`
    UtilizationMetrics []LambdaFunctionUtilizationMetric `json:"utilizationMetrics,omitempty"`
    
}


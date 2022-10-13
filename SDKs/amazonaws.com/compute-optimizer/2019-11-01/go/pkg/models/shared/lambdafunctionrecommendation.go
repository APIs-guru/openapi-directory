package shared

import (
	"time"
)

type LambdaFunctionRecommendation struct {
	AccountID                       *string                                             `json:"accountId"`
	CurrentMemorySize               *int64                                              `json:"currentMemorySize"`
	Finding                         *LambdaFunctionRecommendationFindingEnum            `json:"finding"`
	FindingReasonCodes              []LambdaFunctionRecommendationFindingReasonCodeEnum `json:"findingReasonCodes"`
	FunctionArn                     *string                                             `json:"functionArn"`
	FunctionVersion                 *string                                             `json:"functionVersion"`
	LastRefreshTimestamp            *time.Time                                          `json:"lastRefreshTimestamp"`
	LookbackPeriodInDays            *float64                                            `json:"lookbackPeriodInDays"`
	MemorySizeRecommendationOptions []LambdaFunctionMemoryRecommendationOption          `json:"memorySizeRecommendationOptions"`
	NumberOfInvocations             *int64                                              `json:"numberOfInvocations"`
	UtilizationMetrics              []LambdaFunctionUtilizationMetric                   `json:"utilizationMetrics"`
}

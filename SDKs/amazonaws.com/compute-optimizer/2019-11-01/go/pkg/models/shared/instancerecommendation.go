package shared

import (
	"time"
)

type InstanceRecommendation struct {
	AccountID             *string                                       `json:"accountId"`
	CurrentInstanceType   *string                                       `json:"currentInstanceType"`
	Finding               *FindingEnum                                  `json:"finding"`
	FindingReasonCodes    []InstanceRecommendationFindingReasonCodeEnum `json:"findingReasonCodes"`
	InstanceArn           *string                                       `json:"instanceArn"`
	InstanceName          *string                                       `json:"instanceName"`
	LastRefreshTimestamp  *time.Time                                    `json:"lastRefreshTimestamp"`
	LookBackPeriodInDays  *float64                                      `json:"lookBackPeriodInDays"`
	RecommendationOptions []InstanceRecommendationOption                `json:"recommendationOptions"`
	RecommendationSources []RecommendationSource                        `json:"recommendationSources"`
	UtilizationMetrics    []UtilizationMetric                           `json:"utilizationMetrics"`
}

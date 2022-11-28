package shared

import (
	"time"
)

// InstanceRecommendation
// Describes an Amazon EC2 instance recommendation.
type InstanceRecommendation struct {
	AccountID             *string                                       `json:"accountId,omitempty"`
	CurrentInstanceType   *string                                       `json:"currentInstanceType,omitempty"`
	Finding               *FindingEnum                                  `json:"finding,omitempty"`
	FindingReasonCodes    []InstanceRecommendationFindingReasonCodeEnum `json:"findingReasonCodes,omitempty"`
	InstanceArn           *string                                       `json:"instanceArn,omitempty"`
	InstanceName          *string                                       `json:"instanceName,omitempty"`
	LastRefreshTimestamp  *time.Time                                    `json:"lastRefreshTimestamp,omitempty"`
	LookBackPeriodInDays  *float64                                      `json:"lookBackPeriodInDays,omitempty"`
	RecommendationOptions []InstanceRecommendationOption                `json:"recommendationOptions,omitempty"`
	RecommendationSources []RecommendationSource                        `json:"recommendationSources,omitempty"`
	UtilizationMetrics    []UtilizationMetric                           `json:"utilizationMetrics,omitempty"`
}

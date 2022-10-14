package shared

import (
	"time"
)

type AutoScalingGroupRecommendation struct {
	AccountID             *string                                `json:"accountId,omitempty"`
	AutoScalingGroupArn   *string                                `json:"autoScalingGroupArn,omitempty"`
	AutoScalingGroupName  *string                                `json:"autoScalingGroupName,omitempty"`
	CurrentConfiguration  *AutoScalingGroupConfiguration         `json:"currentConfiguration,omitempty"`
	Finding               *FindingEnum                           `json:"finding,omitempty"`
	LastRefreshTimestamp  *time.Time                             `json:"lastRefreshTimestamp,omitempty"`
	LookBackPeriodInDays  *float64                               `json:"lookBackPeriodInDays,omitempty"`
	RecommendationOptions []AutoScalingGroupRecommendationOption `json:"recommendationOptions,omitempty"`
	UtilizationMetrics    []UtilizationMetric                    `json:"utilizationMetrics,omitempty"`
}

package shared

import (
	"time"
)

type AutoScalingGroupRecommendation struct {
	AccountID             *string                                `json:"accountId"`
	AutoScalingGroupArn   *string                                `json:"autoScalingGroupArn"`
	AutoScalingGroupName  *string                                `json:"autoScalingGroupName"`
	CurrentConfiguration  *AutoScalingGroupConfiguration         `json:"currentConfiguration"`
	Finding               *FindingEnum                           `json:"finding"`
	LastRefreshTimestamp  *time.Time                             `json:"lastRefreshTimestamp"`
	LookBackPeriodInDays  *float64                               `json:"lookBackPeriodInDays"`
	RecommendationOptions []AutoScalingGroupRecommendationOption `json:"recommendationOptions"`
	UtilizationMetrics    []UtilizationMetric                    `json:"utilizationMetrics"`
}

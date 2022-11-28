package shared

import (
	"time"
)

// VolumeRecommendation
// Describes an Amazon Elastic Block Store (Amazon EBS) volume recommendation.
type VolumeRecommendation struct {
	AccountID                   *string                      `json:"accountId,omitempty"`
	CurrentConfiguration        *VolumeConfiguration         `json:"currentConfiguration,omitempty"`
	Finding                     *EbsFindingEnum              `json:"finding,omitempty"`
	LastRefreshTimestamp        *time.Time                   `json:"lastRefreshTimestamp,omitempty"`
	LookBackPeriodInDays        *float64                     `json:"lookBackPeriodInDays,omitempty"`
	UtilizationMetrics          []EbsUtilizationMetric       `json:"utilizationMetrics,omitempty"`
	VolumeArn                   *string                      `json:"volumeArn,omitempty"`
	VolumeRecommendationOptions []VolumeRecommendationOption `json:"volumeRecommendationOptions,omitempty"`
}

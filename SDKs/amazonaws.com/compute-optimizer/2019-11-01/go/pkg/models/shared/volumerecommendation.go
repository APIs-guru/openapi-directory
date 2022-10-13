package shared

import (
	"time"
)

type VolumeRecommendation struct {
	AccountID                   *string                      `json:"accountId"`
	CurrentConfiguration        *VolumeConfiguration         `json:"currentConfiguration"`
	Finding                     *EbsFindingEnum              `json:"finding"`
	LastRefreshTimestamp        *time.Time                   `json:"lastRefreshTimestamp"`
	LookBackPeriodInDays        *float64                     `json:"lookBackPeriodInDays"`
	UtilizationMetrics          []EbsUtilizationMetric       `json:"utilizationMetrics"`
	VolumeArn                   *string                      `json:"volumeArn"`
	VolumeRecommendationOptions []VolumeRecommendationOption `json:"volumeRecommendationOptions"`
}

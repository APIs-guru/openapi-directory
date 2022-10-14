package shared

import (
	"time"
)

type GetEc2RecommendationProjectedMetricsRequest struct {
	EndTime                   time.Time                  `json:"endTime"`
	InstanceArn               string                     `json:"instanceArn"`
	Period                    int64                      `json:"period"`
	RecommendationPreferences *RecommendationPreferences `json:"recommendationPreferences,omitempty"`
	StartTime                 time.Time                  `json:"startTime"`
	Stat                      MetricStatisticEnum        `json:"stat"`
}

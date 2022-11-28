package shared

import (
	"time"
)

// GetRecommendationsResponse
// The structure representing the GetRecommendationsResponse.
type GetRecommendationsResponse struct {
	Anomalies          []Anomaly        `json:"anomalies"`
	ProfileEndTime     time.Time        `json:"profileEndTime"`
	ProfileStartTime   time.Time        `json:"profileStartTime"`
	ProfilingGroupName string           `json:"profilingGroupName"`
	Recommendations    []Recommendation `json:"recommendations"`
}

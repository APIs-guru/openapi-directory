package shared



type DescribeAccountOverviewResponse struct {
    MeanTimeToRecoverInMilliseconds int64 `json:"MeanTimeToRecoverInMilliseconds"`
    ProactiveInsights int64 `json:"ProactiveInsights"`
    ReactiveInsights int64 `json:"ReactiveInsights"`
    
}


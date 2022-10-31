package shared



type CrawlerMetrics struct {
    CrawlerName *string `json:"CrawlerName,omitempty"`
    LastRuntimeSeconds *float64 `json:"LastRuntimeSeconds,omitempty"`
    MedianRuntimeSeconds *float64 `json:"MedianRuntimeSeconds,omitempty"`
    StillEstimating *bool `json:"StillEstimating,omitempty"`
    TablesCreated *int64 `json:"TablesCreated,omitempty"`
    TablesDeleted *int64 `json:"TablesDeleted,omitempty"`
    TablesUpdated *int64 `json:"TablesUpdated,omitempty"`
    TimeLeftSeconds *float64 `json:"TimeLeftSeconds,omitempty"`
    
}


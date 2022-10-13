package shared

type CrawlerMetrics struct {
	CrawlerName          *string  `json:"CrawlerName"`
	LastRuntimeSeconds   *float64 `json:"LastRuntimeSeconds"`
	MedianRuntimeSeconds *float64 `json:"MedianRuntimeSeconds"`
	StillEstimating      *bool    `json:"StillEstimating"`
	TablesCreated        *int64   `json:"TablesCreated"`
	TablesDeleted        *int64   `json:"TablesDeleted"`
	TablesUpdated        *int64   `json:"TablesUpdated"`
	TimeLeftSeconds      *float64 `json:"TimeLeftSeconds"`
}

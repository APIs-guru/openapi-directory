package shared

type GetCrawlerMetricsResponse struct {
	CrawlerMetricsList []CrawlerMetrics `json:"CrawlerMetricsList,omitempty"`
	NextToken          *string          `json:"NextToken,omitempty"`
}

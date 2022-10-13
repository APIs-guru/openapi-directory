package shared

type GetCrawlerMetricsResponse struct {
	CrawlerMetricsList []CrawlerMetrics `json:"CrawlerMetricsList"`
	NextToken          *string          `json:"NextToken"`
}

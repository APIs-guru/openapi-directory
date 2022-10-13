package shared

type GetCrawlerMetricsRequest struct {
	CrawlerNameList []string `json:"CrawlerNameList"`
	MaxResults      *int64   `json:"MaxResults"`
	NextToken       *string  `json:"NextToken"`
}

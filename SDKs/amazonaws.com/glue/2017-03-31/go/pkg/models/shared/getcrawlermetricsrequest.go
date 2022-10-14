package shared

type GetCrawlerMetricsRequest struct {
	CrawlerNameList []string `json:"CrawlerNameList,omitempty"`
	MaxResults      *int64   `json:"MaxResults,omitempty"`
	NextToken       *string  `json:"NextToken,omitempty"`
}

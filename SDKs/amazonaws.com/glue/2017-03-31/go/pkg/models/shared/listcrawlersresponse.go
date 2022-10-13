package shared

type ListCrawlersResponse struct {
	CrawlerNames []string `json:"CrawlerNames"`
	NextToken    *string  `json:"NextToken"`
}

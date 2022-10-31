package shared

type BatchGetCrawlersResponse struct {
	Crawlers         []Crawler `json:"Crawlers,omitempty"`
	CrawlersNotFound []string  `json:"CrawlersNotFound,omitempty"`
}

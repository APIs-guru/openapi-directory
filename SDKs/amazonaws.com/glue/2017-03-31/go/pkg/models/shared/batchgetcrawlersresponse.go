package shared

type BatchGetCrawlersResponse struct {
	Crawlers         []Crawler `json:"Crawlers"`
	CrawlersNotFound []string  `json:"CrawlersNotFound"`
}

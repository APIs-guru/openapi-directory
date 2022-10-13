package shared

type GetCrawlersResponse struct {
	Crawlers  []Crawler `json:"Crawlers"`
	NextToken *string   `json:"NextToken"`
}

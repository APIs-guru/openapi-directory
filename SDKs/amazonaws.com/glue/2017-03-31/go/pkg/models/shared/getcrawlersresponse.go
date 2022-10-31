package shared



type GetCrawlersResponse struct {
    Crawlers []Crawler `json:"Crawlers,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}


package shared



type ListCrawlersResponse struct {
    CrawlerNames []string `json:"CrawlerNames,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}


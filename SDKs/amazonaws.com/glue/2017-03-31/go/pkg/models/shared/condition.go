package shared



type Condition struct {
    CrawlState *CrawlStateEnum `json:"CrawlState,omitempty"`
    CrawlerName *string `json:"CrawlerName,omitempty"`
    JobName *string `json:"JobName,omitempty"`
    LogicalOperator *LogicalOperatorEnum `json:"LogicalOperator,omitempty"`
    State *JobRunStateEnum `json:"State,omitempty"`
    
}


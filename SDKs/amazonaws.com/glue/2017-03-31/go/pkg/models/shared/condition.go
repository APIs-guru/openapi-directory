package shared

type Condition struct {
	CrawlState      *CrawlStateEnum      `json:"CrawlState"`
	CrawlerName     *string              `json:"CrawlerName"`
	JobName         *string              `json:"JobName"`
	LogicalOperator *LogicalOperatorEnum `json:"LogicalOperator"`
	State           *JobRunStateEnum     `json:"State"`
}

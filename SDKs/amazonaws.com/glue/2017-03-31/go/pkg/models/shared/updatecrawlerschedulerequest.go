package shared

type UpdateCrawlerScheduleRequest struct {
	CrawlerName string  `json:"CrawlerName"`
	Schedule    *string `json:"Schedule"`
}

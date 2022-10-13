package shared

type Action struct {
	Arguments             map[string]string     `json:"Arguments"`
	CrawlerName           *string               `json:"CrawlerName"`
	JobName               *string               `json:"JobName"`
	NotificationProperty  *NotificationProperty `json:"NotificationProperty"`
	SecurityConfiguration *string               `json:"SecurityConfiguration"`
	Timeout               *int64                `json:"Timeout"`
}

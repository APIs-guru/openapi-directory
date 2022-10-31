package shared

type Action struct {
	Arguments             map[string]string     `json:"Arguments,omitempty"`
	CrawlerName           *string               `json:"CrawlerName,omitempty"`
	JobName               *string               `json:"JobName,omitempty"`
	NotificationProperty  *NotificationProperty `json:"NotificationProperty,omitempty"`
	SecurityConfiguration *string               `json:"SecurityConfiguration,omitempty"`
	Timeout               *int64                `json:"Timeout,omitempty"`
}

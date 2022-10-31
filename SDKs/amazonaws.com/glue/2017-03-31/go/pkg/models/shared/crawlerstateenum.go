package shared




type CrawlerStateEnum string

const (
    CrawlerStateEnumReady CrawlerStateEnum = "READY"
CrawlerStateEnumRunning CrawlerStateEnum = "RUNNING"
CrawlerStateEnumStopping CrawlerStateEnum = "STOPPING"
)



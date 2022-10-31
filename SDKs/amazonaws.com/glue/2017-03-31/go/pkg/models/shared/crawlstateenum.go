package shared




type CrawlStateEnum string

const (
    CrawlStateEnumRunning CrawlStateEnum = "RUNNING"
CrawlStateEnumCancelling CrawlStateEnum = "CANCELLING"
CrawlStateEnumCancelled CrawlStateEnum = "CANCELLED"
CrawlStateEnumSucceeded CrawlStateEnum = "SUCCEEDED"
CrawlStateEnumFailed CrawlStateEnum = "FAILED"
)



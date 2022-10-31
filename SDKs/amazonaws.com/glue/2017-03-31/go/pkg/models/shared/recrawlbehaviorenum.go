package shared

type RecrawlBehaviorEnum string

const (
	RecrawlBehaviorEnumCrawlEverything     RecrawlBehaviorEnum = "CRAWL_EVERYTHING"
	RecrawlBehaviorEnumCrawlNewFoldersOnly RecrawlBehaviorEnum = "CRAWL_NEW_FOLDERS_ONLY"
)

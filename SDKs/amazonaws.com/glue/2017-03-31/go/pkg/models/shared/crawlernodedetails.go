package shared

// CrawlerNodeDetails
// The details of a Crawler node present in the workflow.
type CrawlerNodeDetails struct {
	Crawls []Crawl `json:"Crawls,omitempty"`
}

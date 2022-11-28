package shared

// LineageConfiguration
// Specifies data lineage configuration settings for the crawler.
type LineageConfiguration struct {
	CrawlerLineageSettings *CrawlerLineageSettingsEnum `json:"CrawlerLineageSettings,omitempty"`
}

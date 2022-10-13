package shared

type CreateCrawlerRequest struct {
	Classifiers                  []string              `json:"Classifiers"`
	Configuration                *string               `json:"Configuration"`
	CrawlerSecurityConfiguration *string               `json:"CrawlerSecurityConfiguration"`
	DatabaseName                 *string               `json:"DatabaseName"`
	Description                  *string               `json:"Description"`
	LineageConfiguration         *LineageConfiguration `json:"LineageConfiguration"`
	Name                         string                `json:"Name"`
	RecrawlPolicy                *RecrawlPolicy        `json:"RecrawlPolicy"`
	Role                         string                `json:"Role"`
	Schedule                     *string               `json:"Schedule"`
	SchemaChangePolicy           *SchemaChangePolicy   `json:"SchemaChangePolicy"`
	TablePrefix                  *string               `json:"TablePrefix"`
	Tags                         map[string]string     `json:"Tags"`
	Targets                      CrawlerTargets        `json:"Targets"`
}

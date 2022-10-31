package shared

type UpdateCrawlerRequest struct {
	Classifiers                  []string              `json:"Classifiers,omitempty"`
	Configuration                *string               `json:"Configuration,omitempty"`
	CrawlerSecurityConfiguration *string               `json:"CrawlerSecurityConfiguration,omitempty"`
	DatabaseName                 *string               `json:"DatabaseName,omitempty"`
	Description                  *string               `json:"Description,omitempty"`
	LineageConfiguration         *LineageConfiguration `json:"LineageConfiguration,omitempty"`
	Name                         string                `json:"Name"`
	RecrawlPolicy                *RecrawlPolicy        `json:"RecrawlPolicy,omitempty"`
	Role                         *string               `json:"Role,omitempty"`
	Schedule                     *string               `json:"Schedule,omitempty"`
	SchemaChangePolicy           *SchemaChangePolicy   `json:"SchemaChangePolicy,omitempty"`
	TablePrefix                  *string               `json:"TablePrefix,omitempty"`
	Targets                      *CrawlerTargets       `json:"Targets,omitempty"`
}

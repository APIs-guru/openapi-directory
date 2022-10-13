package shared

import (
	"time"
)

type Crawler struct {
	Classifiers                  []string              `json:"Classifiers"`
	Configuration                *string               `json:"Configuration"`
	CrawlElapsedTime             *int64                `json:"CrawlElapsedTime"`
	CrawlerSecurityConfiguration *string               `json:"CrawlerSecurityConfiguration"`
	CreationTime                 *time.Time            `json:"CreationTime"`
	DatabaseName                 *string               `json:"DatabaseName"`
	Description                  *string               `json:"Description"`
	LastCrawl                    *LastCrawlInfo        `json:"LastCrawl"`
	LastUpdated                  *time.Time            `json:"LastUpdated"`
	LineageConfiguration         *LineageConfiguration `json:"LineageConfiguration"`
	Name                         *string               `json:"Name"`
	RecrawlPolicy                *RecrawlPolicy        `json:"RecrawlPolicy"`
	Role                         *string               `json:"Role"`
	Schedule                     *Schedule             `json:"Schedule"`
	SchemaChangePolicy           *SchemaChangePolicy   `json:"SchemaChangePolicy"`
	State                        *CrawlerStateEnum     `json:"State"`
	TablePrefix                  *string               `json:"TablePrefix"`
	Targets                      *CrawlerTargets       `json:"Targets"`
	Version                      *int64                `json:"Version"`
}

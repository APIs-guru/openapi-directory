package shared

import (
"time")

type Crawler struct {
    Classifiers []string `json:"Classifiers,omitempty"`
    Configuration *string `json:"Configuration,omitempty"`
    CrawlElapsedTime *int64 `json:"CrawlElapsedTime,omitempty"`
    CrawlerSecurityConfiguration *string `json:"CrawlerSecurityConfiguration,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    DatabaseName *string `json:"DatabaseName,omitempty"`
    Description *string `json:"Description,omitempty"`
    LastCrawl *LastCrawlInfo `json:"LastCrawl,omitempty"`
    LastUpdated *time.Time `json:"LastUpdated,omitempty"`
    LineageConfiguration *LineageConfiguration `json:"LineageConfiguration,omitempty"`
    Name *string `json:"Name,omitempty"`
    RecrawlPolicy *RecrawlPolicy `json:"RecrawlPolicy,omitempty"`
    Role *string `json:"Role,omitempty"`
    Schedule *Schedule `json:"Schedule,omitempty"`
    SchemaChangePolicy *SchemaChangePolicy `json:"SchemaChangePolicy,omitempty"`
    State *CrawlerStateEnum `json:"State,omitempty"`
    TablePrefix *string `json:"TablePrefix,omitempty"`
    Targets *CrawlerTargets `json:"Targets,omitempty"`
    Version *int64 `json:"Version,omitempty"`
    
}


package shared

import (
	"time"
)

// Crawl
// The details of a crawl in the workflow.
type Crawl struct {
	CompletedOn  *time.Time      `json:"CompletedOn,omitempty"`
	ErrorMessage *string         `json:"ErrorMessage,omitempty"`
	LogGroup     *string         `json:"LogGroup,omitempty"`
	LogStream    *string         `json:"LogStream,omitempty"`
	StartedOn    *time.Time      `json:"StartedOn,omitempty"`
	State        *CrawlStateEnum `json:"State,omitempty"`
}

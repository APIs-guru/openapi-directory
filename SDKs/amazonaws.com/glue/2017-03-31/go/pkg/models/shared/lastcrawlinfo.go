package shared

import (
	"time"
)

// LastCrawlInfo
// Status and error information about the most recent crawl.
type LastCrawlInfo struct {
	ErrorMessage  *string              `json:"ErrorMessage,omitempty"`
	LogGroup      *string              `json:"LogGroup,omitempty"`
	LogStream     *string              `json:"LogStream,omitempty"`
	MessagePrefix *string              `json:"MessagePrefix,omitempty"`
	StartTime     *time.Time           `json:"StartTime,omitempty"`
	Status        *LastCrawlStatusEnum `json:"Status,omitempty"`
}

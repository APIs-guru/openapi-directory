package shared

import (
	"time"
)

type Crawl struct {
	CompletedOn  *time.Time      `json:"CompletedOn"`
	ErrorMessage *string         `json:"ErrorMessage"`
	LogGroup     *string         `json:"LogGroup"`
	LogStream    *string         `json:"LogStream"`
	StartedOn    *time.Time      `json:"StartedOn"`
	State        *CrawlStateEnum `json:"State"`
}

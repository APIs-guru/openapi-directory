package shared

import (
	"time"
)

type LastCrawlInfo struct {
	ErrorMessage  *string              `json:"ErrorMessage"`
	LogGroup      *string              `json:"LogGroup"`
	LogStream     *string              `json:"LogStream"`
	MessagePrefix *string              `json:"MessagePrefix"`
	StartTime     *time.Time           `json:"StartTime"`
	Status        *LastCrawlStatusEnum `json:"Status"`
}

package shared

import (
"time")

type LastCrawlInfo struct {
    ErrorMessage *string `json:"ErrorMessage,omitempty"`
    LogGroup *string `json:"LogGroup,omitempty"`
    LogStream *string `json:"LogStream,omitempty"`
    MessagePrefix *string `json:"MessagePrefix,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    Status *LastCrawlStatusEnum `json:"Status,omitempty"`
    
}


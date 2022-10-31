package shared

import (
	"time"
)

type ListConfigurationHistoryRequest struct {
	EndTime           *time.Time                    `json:"EndTime,omitempty"`
	EventStatus       *ConfigurationEventStatusEnum `json:"EventStatus,omitempty"`
	MaxResults        *int64                        `json:"MaxResults,omitempty"`
	NextToken         *string                       `json:"NextToken,omitempty"`
	ResourceGroupName *string                       `json:"ResourceGroupName,omitempty"`
	StartTime         *time.Time                    `json:"StartTime,omitempty"`
}

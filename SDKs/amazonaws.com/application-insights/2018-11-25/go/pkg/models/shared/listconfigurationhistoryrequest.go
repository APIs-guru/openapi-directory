package shared

import (
	"time"
)

type ListConfigurationHistoryRequest struct {
	EndTime           *time.Time                    `json:"EndTime"`
	EventStatus       *ConfigurationEventStatusEnum `json:"EventStatus"`
	MaxResults        *int64                        `json:"MaxResults"`
	NextToken         *string                       `json:"NextToken"`
	ResourceGroupName *string                       `json:"ResourceGroupName"`
	StartTime         *time.Time                    `json:"StartTime"`
}

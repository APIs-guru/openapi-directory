package shared

import (
	"time"
)

type ListProblemsRequest struct {
	EndTime           *time.Time `json:"EndTime"`
	MaxResults        *int64     `json:"MaxResults"`
	NextToken         *string    `json:"NextToken"`
	ResourceGroupName *string    `json:"ResourceGroupName"`
	StartTime         *time.Time `json:"StartTime"`
}

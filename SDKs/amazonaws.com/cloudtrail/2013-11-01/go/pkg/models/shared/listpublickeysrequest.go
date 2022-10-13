package shared

import (
	"time"
)

type ListPublicKeysRequest struct {
	EndTime   *time.Time `json:"EndTime"`
	NextToken *string    `json:"NextToken"`
	StartTime *time.Time `json:"StartTime"`
}

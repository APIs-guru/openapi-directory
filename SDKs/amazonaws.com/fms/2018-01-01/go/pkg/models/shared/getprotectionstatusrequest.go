package shared

import (
	"time"
)

type GetProtectionStatusRequest struct {
	EndTime         *time.Time `json:"EndTime"`
	MaxResults      *int64     `json:"MaxResults"`
	MemberAccountID *string    `json:"MemberAccountId"`
	NextToken       *string    `json:"NextToken"`
	PolicyID        string     `json:"PolicyId"`
	StartTime       *time.Time `json:"StartTime"`
}

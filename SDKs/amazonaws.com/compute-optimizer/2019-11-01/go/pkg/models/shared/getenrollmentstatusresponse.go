package shared

import (
	"time"
)

type GetEnrollmentStatusResponse struct {
	LastUpdatedTimestamp          *time.Time  `json:"lastUpdatedTimestamp"`
	MemberAccountsEnrolled        *bool       `json:"memberAccountsEnrolled"`
	NumberOfMemberAccountsOptedIn *int64      `json:"numberOfMemberAccountsOptedIn"`
	Status                        *StatusEnum `json:"status"`
	StatusReason                  *string     `json:"statusReason"`
}

package shared

import (
	"time"
)

type PutApprovalResultOutput struct {
	ApprovedAt *time.Time `json:"approvedAt,omitempty"`
}

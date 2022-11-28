package shared

import (
	"time"
)

// PutApprovalResultOutput
// Represents the output of a <code>PutApprovalResult</code> action.
type PutApprovalResultOutput struct {
	ApprovedAt *time.Time `json:"approvedAt,omitempty"`
}

package shared

import (
	"time"
)

// QueryExecutionStatus
// The completion date, current state, submission time, and state change reason (if applicable) for the query execution.
type QueryExecutionStatus struct {
	CompletionDateTime *time.Time               `json:"CompletionDateTime,omitempty"`
	State              *QueryExecutionStateEnum `json:"State,omitempty"`
	StateChangeReason  *string                  `json:"StateChangeReason,omitempty"`
	SubmissionDateTime *time.Time               `json:"SubmissionDateTime,omitempty"`
}

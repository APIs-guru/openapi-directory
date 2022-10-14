package shared

import (
	"time"
)

type QueryExecutionStatus struct {
	CompletionDateTime *time.Time               `json:"CompletionDateTime,omitempty"`
	State              *QueryExecutionStateEnum `json:"State,omitempty"`
	StateChangeReason  *string                  `json:"StateChangeReason,omitempty"`
	SubmissionDateTime *time.Time               `json:"SubmissionDateTime,omitempty"`
}

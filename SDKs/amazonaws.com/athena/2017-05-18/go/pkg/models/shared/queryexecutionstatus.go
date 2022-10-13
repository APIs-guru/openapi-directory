package shared

import (
	"time"
)

type QueryExecutionStatus struct {
	CompletionDateTime *time.Time               `json:"CompletionDateTime"`
	State              *QueryExecutionStateEnum `json:"State"`
	StateChangeReason  *string                  `json:"StateChangeReason"`
	SubmissionDateTime *time.Time               `json:"SubmissionDateTime"`
}

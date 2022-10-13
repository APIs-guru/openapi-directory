package shared

import (
	"time"
)

type DescribeJobFlowsInput struct {
	CreatedAfter  *time.Time                  `json:"CreatedAfter"`
	CreatedBefore *time.Time                  `json:"CreatedBefore"`
	JobFlowIds    []string                    `json:"JobFlowIds"`
	JobFlowStates []JobFlowExecutionStateEnum `json:"JobFlowStates"`
}

package shared

import (
	"time"
)

// DescribeJobFlowsInput
//
//	The input for the <a>DescribeJobFlows</a> operation.
type DescribeJobFlowsInput struct {
	CreatedAfter  *time.Time                  `json:"CreatedAfter,omitempty"`
	CreatedBefore *time.Time                  `json:"CreatedBefore,omitempty"`
	JobFlowIds    []string                    `json:"JobFlowIds,omitempty"`
	JobFlowStates []JobFlowExecutionStateEnum `json:"JobFlowStates,omitempty"`
}

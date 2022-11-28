package shared

import (
	"time"
)

// RefreshSchemasStatus
// Provides information that describes status of a schema at an endpoint specified by the <code>DescribeRefreshSchemaStatus</code> operation.
type RefreshSchemasStatus struct {
	EndpointArn            *string                            `json:"EndpointArn,omitempty"`
	LastFailureMessage     *string                            `json:"LastFailureMessage,omitempty"`
	LastRefreshDate        *time.Time                         `json:"LastRefreshDate,omitempty"`
	ReplicationInstanceArn *string                            `json:"ReplicationInstanceArn,omitempty"`
	Status                 *RefreshSchemasStatusTypeValueEnum `json:"Status,omitempty"`
}

package shared

import (
	"time"
)

type RefreshSchemasStatus struct {
	EndpointArn            *string                            `json:"EndpointArn,omitempty"`
	LastFailureMessage     *string                            `json:"LastFailureMessage,omitempty"`
	LastRefreshDate        *time.Time                         `json:"LastRefreshDate,omitempty"`
	ReplicationInstanceArn *string                            `json:"ReplicationInstanceArn,omitempty"`
	Status                 *RefreshSchemasStatusTypeValueEnum `json:"Status,omitempty"`
}

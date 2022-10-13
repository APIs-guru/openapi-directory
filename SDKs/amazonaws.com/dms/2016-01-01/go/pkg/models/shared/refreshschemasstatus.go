package shared

import (
	"time"
)

type RefreshSchemasStatus struct {
	EndpointArn            *string                            `json:"EndpointArn"`
	LastFailureMessage     *string                            `json:"LastFailureMessage"`
	LastRefreshDate        *time.Time                         `json:"LastRefreshDate"`
	ReplicationInstanceArn *string                            `json:"ReplicationInstanceArn"`
	Status                 *RefreshSchemasStatusTypeValueEnum `json:"Status"`
}

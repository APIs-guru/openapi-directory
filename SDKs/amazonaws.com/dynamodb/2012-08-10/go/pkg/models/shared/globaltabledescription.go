package shared

import (
	"time"
)

type GlobalTableDescription struct {
	CreationDateTime  *time.Time             `json:"CreationDateTime,omitempty"`
	GlobalTableArn    *string                `json:"GlobalTableArn,omitempty"`
	GlobalTableName   *string                `json:"GlobalTableName,omitempty"`
	GlobalTableStatus *GlobalTableStatusEnum `json:"GlobalTableStatus,omitempty"`
	ReplicationGroup  []ReplicaDescription   `json:"ReplicationGroup,omitempty"`
}

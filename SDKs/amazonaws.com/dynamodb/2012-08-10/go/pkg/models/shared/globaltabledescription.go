package shared

import (
	"time"
)

type GlobalTableDescription struct {
	CreationDateTime  *time.Time             `json:"CreationDateTime"`
	GlobalTableArn    *string                `json:"GlobalTableArn"`
	GlobalTableName   *string                `json:"GlobalTableName"`
	GlobalTableStatus *GlobalTableStatusEnum `json:"GlobalTableStatus"`
	ReplicationGroup  []ReplicaDescription   `json:"ReplicationGroup"`
}

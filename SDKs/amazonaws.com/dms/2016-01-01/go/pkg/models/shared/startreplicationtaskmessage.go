package shared

import (
	"time"
)

type StartReplicationTaskMessage struct {
	CdcStartPosition         *string                           `json:"CdcStartPosition"`
	CdcStartTime             *time.Time                        `json:"CdcStartTime"`
	CdcStopPosition          *string                           `json:"CdcStopPosition"`
	ReplicationTaskArn       string                            `json:"ReplicationTaskArn"`
	StartReplicationTaskType StartReplicationTaskTypeValueEnum `json:"StartReplicationTaskType"`
}

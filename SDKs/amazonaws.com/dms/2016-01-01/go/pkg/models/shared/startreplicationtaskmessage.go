package shared

import (
	"time"
)

// StartReplicationTaskMessage
// <p/>
type StartReplicationTaskMessage struct {
	CdcStartPosition         *string                           `json:"CdcStartPosition,omitempty"`
	CdcStartTime             *time.Time                        `json:"CdcStartTime,omitempty"`
	CdcStopPosition          *string                           `json:"CdcStopPosition,omitempty"`
	ReplicationTaskArn       string                            `json:"ReplicationTaskArn"`
	StartReplicationTaskType StartReplicationTaskTypeValueEnum `json:"StartReplicationTaskType"`
}

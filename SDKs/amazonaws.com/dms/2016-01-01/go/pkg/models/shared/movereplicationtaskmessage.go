package shared

// MoveReplicationTaskMessage
// <p/>
type MoveReplicationTaskMessage struct {
	ReplicationTaskArn           string `json:"ReplicationTaskArn"`
	TargetReplicationInstanceArn string `json:"TargetReplicationInstanceArn"`
}

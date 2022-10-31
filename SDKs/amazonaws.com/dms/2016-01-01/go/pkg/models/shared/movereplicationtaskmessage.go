package shared



type MoveReplicationTaskMessage struct {
    ReplicationTaskArn string `json:"ReplicationTaskArn"`
    TargetReplicationInstanceArn string `json:"TargetReplicationInstanceArn"`
    
}


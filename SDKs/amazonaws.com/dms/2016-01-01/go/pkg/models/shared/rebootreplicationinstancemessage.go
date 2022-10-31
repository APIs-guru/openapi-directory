package shared



type RebootReplicationInstanceMessage struct {
    ForceFailover *bool `json:"ForceFailover,omitempty"`
    ForcePlannedFailover *bool `json:"ForcePlannedFailover,omitempty"`
    ReplicationInstanceArn string `json:"ReplicationInstanceArn"`
    
}


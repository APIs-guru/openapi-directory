package shared

type RebootReplicationInstanceMessage struct {
	ForceFailover          *bool  `json:"ForceFailover"`
	ForcePlannedFailover   *bool  `json:"ForcePlannedFailover"`
	ReplicationInstanceArn string `json:"ReplicationInstanceArn"`
}

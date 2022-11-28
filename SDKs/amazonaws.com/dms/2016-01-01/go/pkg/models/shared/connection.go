package shared

// Connection
// Status of the connection between an endpoint and a replication instance, including Amazon Resource Names (ARNs) and the last error message issued.
type Connection struct {
	EndpointArn                   *string `json:"EndpointArn,omitempty"`
	EndpointIdentifier            *string `json:"EndpointIdentifier,omitempty"`
	LastFailureMessage            *string `json:"LastFailureMessage,omitempty"`
	ReplicationInstanceArn        *string `json:"ReplicationInstanceArn,omitempty"`
	ReplicationInstanceIdentifier *string `json:"ReplicationInstanceIdentifier,omitempty"`
	Status                        *string `json:"Status,omitempty"`
}

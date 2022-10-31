package shared



type Connection struct {
    EndpointArn *string `json:"EndpointArn,omitempty"`
    EndpointIdentifier *string `json:"EndpointIdentifier,omitempty"`
    LastFailureMessage *string `json:"LastFailureMessage,omitempty"`
    ReplicationInstanceArn *string `json:"ReplicationInstanceArn,omitempty"`
    ReplicationInstanceIdentifier *string `json:"ReplicationInstanceIdentifier,omitempty"`
    Status *string `json:"Status,omitempty"`
    
}


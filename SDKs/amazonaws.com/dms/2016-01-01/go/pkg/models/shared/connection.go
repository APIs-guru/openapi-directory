package shared

type Connection struct {
	EndpointArn                   *string `json:"EndpointArn"`
	EndpointIdentifier            *string `json:"EndpointIdentifier"`
	LastFailureMessage            *string `json:"LastFailureMessage"`
	ReplicationInstanceArn        *string `json:"ReplicationInstanceArn"`
	ReplicationInstanceIdentifier *string `json:"ReplicationInstanceIdentifier"`
	Status                        *string `json:"Status"`
}

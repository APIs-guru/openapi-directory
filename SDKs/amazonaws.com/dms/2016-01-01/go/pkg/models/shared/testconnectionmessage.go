package shared

type TestConnectionMessage struct {
	EndpointArn            string `json:"EndpointArn"`
	ReplicationInstanceArn string `json:"ReplicationInstanceArn"`
}

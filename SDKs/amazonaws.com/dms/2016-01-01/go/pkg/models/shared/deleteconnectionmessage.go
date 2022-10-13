package shared

type DeleteConnectionMessage struct {
	EndpointArn            string `json:"EndpointArn"`
	ReplicationInstanceArn string `json:"ReplicationInstanceArn"`
}

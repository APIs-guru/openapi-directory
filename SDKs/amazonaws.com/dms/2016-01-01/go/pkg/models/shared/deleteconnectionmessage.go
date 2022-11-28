package shared

// DeleteConnectionMessage
// <p/>
type DeleteConnectionMessage struct {
	EndpointArn            string `json:"EndpointArn"`
	ReplicationInstanceArn string `json:"ReplicationInstanceArn"`
}

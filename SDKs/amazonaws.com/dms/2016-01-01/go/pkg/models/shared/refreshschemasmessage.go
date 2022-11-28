package shared

// RefreshSchemasMessage
// <p/>
type RefreshSchemasMessage struct {
	EndpointArn            string `json:"EndpointArn"`
	ReplicationInstanceArn string `json:"ReplicationInstanceArn"`
}

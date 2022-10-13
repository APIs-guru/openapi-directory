package shared

type ConnectionState struct {
	ConnectionID string                 `json:"connectionId"`
	State        map[string]interface{} `json:"state"`
}

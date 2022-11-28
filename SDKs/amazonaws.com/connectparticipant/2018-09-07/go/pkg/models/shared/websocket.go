package shared

// Websocket
// The websocket for the participant's connection.
type Websocket struct {
	ConnectionExpiry *string `json:"ConnectionExpiry,omitempty"`
	URL              *string `json:"Url,omitempty"`
}

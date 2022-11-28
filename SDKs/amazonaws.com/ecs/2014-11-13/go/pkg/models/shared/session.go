package shared

// Session
// The details of the execute command session.
type Session struct {
	SessionID  *string `json:"sessionId,omitempty"`
	StreamURL  *string `json:"streamUrl,omitempty"`
	TokenValue *string `json:"tokenValue,omitempty"`
}

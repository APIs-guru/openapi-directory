package shared

type Session struct {
	SessionID  *string `json:"sessionId"`
	StreamURL  *string `json:"streamUrl"`
	TokenValue *string `json:"tokenValue"`
}

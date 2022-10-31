package shared



type Session struct {
    SessionID *string `json:"sessionId,omitempty"`
    StreamURL *string `json:"streamUrl,omitempty"`
    TokenValue *string `json:"tokenValue,omitempty"`
    
}


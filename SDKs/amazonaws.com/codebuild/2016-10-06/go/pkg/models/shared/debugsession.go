package shared



type DebugSession struct {
    SessionEnabled *bool `json:"sessionEnabled,omitempty"`
    SessionTarget *string `json:"sessionTarget,omitempty"`
    
}


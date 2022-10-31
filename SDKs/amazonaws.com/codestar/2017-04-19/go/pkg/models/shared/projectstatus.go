package shared



type ProjectStatus struct {
    Reason *string `json:"reason,omitempty"`
    State string `json:"state"`
    
}


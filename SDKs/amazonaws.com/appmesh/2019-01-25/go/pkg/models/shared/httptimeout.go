package shared



type HTTPTimeout struct {
    Idle *Duration `json:"idle,omitempty"`
    PerRequest *Duration `json:"perRequest,omitempty"`
    
}


package shared



type GrpcTimeout struct {
    Idle *Duration `json:"idle,omitempty"`
    PerRequest *Duration `json:"perRequest,omitempty"`
    
}


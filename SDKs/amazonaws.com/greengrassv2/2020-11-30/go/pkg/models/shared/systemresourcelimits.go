package shared



type SystemResourceLimits struct {
    Cpus *float64 `json:"cpus,omitempty"`
    Memory *int64 `json:"memory,omitempty"`
    
}


package shared



type Ec2InstanceCounts struct {
    Active *int64 `json:"ACTIVE,omitempty"`
    Desired *int64 `json:"DESIRED,omitempty"`
    Idle *int64 `json:"IDLE,omitempty"`
    Maximum *int64 `json:"MAXIMUM,omitempty"`
    Minimum *int64 `json:"MINIMUM,omitempty"`
    Pending *int64 `json:"PENDING,omitempty"`
    Terminating *int64 `json:"TERMINATING,omitempty"`
    
}


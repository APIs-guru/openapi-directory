package shared



type EnvironmentLifecycle struct {
    FailureResource *string `json:"failureResource,omitempty"`
    Reason *string `json:"reason,omitempty"`
    Status *EnvironmentLifecycleStatusEnum `json:"status,omitempty"`
    
}

